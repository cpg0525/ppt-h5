'use strict';
const needle = require('needle');
const querystring = require('querystring');
const MD5 = require('../libs/md5.js');
const api = require('../api');

function getSignParams(path, runConfig) {
  const appKey = runConfig.ak;
  const signKey = runConfig.sk;
  const timestamp = new Date().getTime();
  const version = runConfig.version;
  const signMap = {
    timestamp,
    path,
    version,
  };
  const computeSign = [];
  Object.keys(signMap).sort().forEach((key) => {
    const val = signMap[key];
    if (val) {
      computeSign.push(`${key}${val}`);
    }
  });
  computeSign.push(signKey);
  return {
    timestamp,
    appKey,
    sign: MD5.hex_md5_32Upper(computeSign.join('')),
    version,
  };
}

module.exports = {
  async apiGet(path, params = {}) {
    const config = this.app.config;
    try {
      const res = await this.httpGet(`${config.apiBaseUrl}${path}`, params, {
        'api-version': api.getApiVersion(path),
        ...getSignParams(path, config.apiSign),
      });
      if (res.busCode !== '1' || res.code !== 200) {
        throw res;
      }
      return res.data;
    } catch (e) {
      throw e;
    }
  },

  async apiPost(path, params = {}) {
    const config = this.app.config;
    try {
      const res = await this.httpPost(`${config.apiBaseUrl}${path}`, params, {
        'api-version': api.getApiVersion(path),
        ...getSignParams(path, config.apiSign),
      });
      if (res.busCode !== '1' || res.code !== 200) {
        throw res;
      }
      return res.data;
    } catch (e) {
      throw e;
    }
  },

  httpGet(url, params, headers = {}) {
    const time = new Date().getTime();
    this.logger.info(`GET: ${time} - 请求地址: ${url}, 请求参数: %j`, params);
    return new Promise((reslove, reject) => {
      let search = '';
      if (params && typeof params === 'object') {
        search = `?${querystring.stringify(params)}`;
      }
      needle.get(`${url}${search}`, {
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        }
      }, (err, response, res) => {
        if (err) {
          this.logger.info(`GET: ${time} - 请求结果 %j`, res);
          return reject({
            message: '服务异常'
          });
        }

        if (typeof res === 'string') {
          try {
            res = JSON.parse(res);
          } catch (e) {
            this.logger.info(`GET: ${time} - 请求结果 %j`, e);
            return reject({
              message: '数据异常'
            });
          }
        }
        this.logger.info(`GET: ${time} - 请求结果 %j`, res);
        reslove(res);
      });
    });
  },

  httpPost(url, params, headers = {}) {
    const time = new Date().getTime();
    this.logger.info(`POST: ${time} - 请求地址: ${url}, 请求参数: %j`, params);
    return new Promise((reslove, reject) => {
      needle.post(url, params, {
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        }
      }, (err, response, res) => {
        if (err) {
          this.logger.info(`POST: ${time} - 请求结果 %j`, res);
          return reject({
            message: '服务异常'
          });
        }
        this.logger.info(`POST: ${time}} - 请求结果 %j`, res);
        reslove(res);
      });
    });
  }
};