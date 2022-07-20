const MakrdownItMeta = require('markdown-it-meta');
const MarkdownIt = require('markdown-it');

const {
  parseInt,
  isEmpty,
  replace,
  split,
  join,
  trim,
  map
} = require('lodash');

const { slugify } = require('transliteration');
// const striptags = require('./strip-tags');

const md = MarkdownIt();

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(
      parseInt(
        encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'),
        16
      )
    );
  });
  return str;
}

function wrap(render) {
  return function(...args) {
    return render
      .apply(this, args)
      .replace('<code v-pre class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };
}

function getMarkdownMeta(source) {
  const md = new MarkdownIt();

  md.use(MakrdownItMeta);
  md.render(source);

  return md.meta;
}

function toMarkdownSource(source) {
  const meta = getMarkdownMeta(source);

  if (!isEmpty(meta)) {
    let header = `# ${trim(meta.title)}`;

    if (meta.label) {
      header += `<small>${meta.label}</small>`;
    }

    if (meta.legacy) {
      header += '<small class="legacy">经典版本</small>';
    }

    if (meta.added) {
      header += `<small class="added">添加于 <code>@${
        meta.added
      }</code></small>`;
    }

    header += '\n\n';

    // 逐渐将不再使用作者而是使用共享者
    if (meta.author) {
      const author = join(
        map(split(meta.author, /,\s+/), author => `@${author}`),
        ', '
      );
      header += `> 作者: ${author}\n\n`;
    }

    if (meta.contributors) {
      const contributors = join(
        map(
          split(meta.contributors, /,\s+/),
          contributor =>
            `<code class="contributor"><mt-icon type="accountfilling"></mt-icon>${contributor}</code>`
        )
      );

      header += `> 贡献者: ${contributors}\n\n`;
    }

    source = header + replace(source, /^---\n[^-]+\n---\n\n/, '');
  }

  return source;
}

const plugins = [
  [require('markdown-it-emoji')],
  [require('markdown-it-meta')],
  [require('markdown-it-task-checkbox')],
  [
    require('markdown-it-anchor'),
    {
      level: 2,
      slugify,
      permalink: false,
      // permalinkSymbol: '#',
      permalinkBefore: false
    }
  ],
  // [
  //     require('markdown-it-container'),
  //     'demo',
  //     {
  //         validate(params) {
  //             return params.trim().match(/^demo\s*(.*)$/);
  //         },

  //         render(tokens, idx) {
  //             const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

  //             if (tokens[idx].nesting === 1) {
  //                 const description = m && m.length > 1 ? m[1] : '';
  //                 const content = tokens[idx + 1].content;
  //                 const html = convert(
  //                     // striptags.strip(content, ['script', 'style'])
  //                     content
  //                 ).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
  //                 const descriptionHTML = description
  //                     ? md.render(description)
  //                     : '';

  //                 return `<demo-block class="demo-box">
  //                 <div class="source" slot="source">${html}</div>
  //                 ${descriptionHTML}
  //                 <div class="highlight" slot="highlight">`;
  //             }

  //             return '</div></demo-block>\n';
  //         }
  //     }
  // ]
];

module.exports = [
  {
    loader: 'vue-loader'
  },
  {
    loader: 'vue-markdown-loader/lib/markdown-compiler',
    options: {
      raw: true,
      wrapper: 'div',
      use: plugins,
      preprocess(MarkdownIt, source) {
        // MarkdownIt.renderer.rules.table_open = function() {
        //     return '<table class="table">';
        // };

        // MarkdownIt.renderer.rules.fence = wrap(
        //     MarkdownIt.renderer.rules.fence
        // );

        // let data  = toMarkdownSource(source);
        // console.log(data);
        return source;
      }
    }
  }
];
