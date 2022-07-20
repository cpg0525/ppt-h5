export default {
  mounted() {
    console.log('keybord-mixin');
    const u = navigator.userAgent;
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if(isiOS) {
      let flag = false;
      let pageBackNormFunc;
      // 聚焦，键盘弹出
      document.body.addEventListener('focusin', () => {
        flag = true;
        pageBackNormFunc && clearTimeout(pageBackNormFunc);
      });

      // 失焦后， 键盘关闭
      document.body.addEventListener('focusout', ()=>{
        if(flag) {
          pageBackNormFunc = setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth'})
          }, 200)
        }
        flag = false;
      });
    }
  }
}