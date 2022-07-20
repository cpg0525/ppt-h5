const coreCapi = '/core-capi';
const pptCapi = '/ppt-capi';
const prefix = `${coreCapi}/customer/`;
const pptPrefix = `${pptCapi}/customer/`;

const resMap = [{
  v: 'v1',
  map: {
    // 首页信息
    BASE_SERVICE: `${pptPrefix}sys/base/service`,
  },
}]

let versionMap;
let apiMap = {};

function createApiVersionMap() {
  versionMap = {};
  for (let i = resMap.length - 1; i >= 0; i--) {
    const item = resMap[i];
    Object.keys(item.map).forEach(key => {
      versionMap[item.map[key]] = item.v;
    });
  }
}

function createApiMap() {
  for (let i = resMap.length - 1; i >= 0; i--) {
    const item = resMap[i];
    apiMap = {
      ...apiMap,
      ...item.map,
    };
  }
}

createApiMap();
createApiVersionMap();

apiMap.getApiVersion = function (url) {
  return versionMap[url] || 'v1';
}

module.exports = apiMap;