'use strict';
import axios from 'axios';
// axios.defaults.baseURL = 'http://127.0.0.1:7001';
axios.defaults.timeout = 15000;
axios.defaults.xsrfHeaderName = 'x-csrf-token';
axios.defaults.xsrfCookieName = 'csrfToken';
export default {
  post(url, json, store = {}) {
    const {
      state = {
        origin: ''
      }
    } = store;
    const headers = {};
    if (EASY_ENV_IS_NODE) {
      headers['x-csrf-token'] = state.csrf;
      headers.Cookie = `csrfToken=${state.csrf}`;
    }
    return new Promise((reslove, reject) => {
      axios.post(`${state.origin}${url}`, {
        apiMethods: 'post',
        data: json,
      }, {
        headers
      }).then(res => {
        if (res.status !== 200) {
          throw res.data;
        } else {
          reslove(res.data);
        }
      }).catch(e => {
        reject(e);
      });
    });
  },
  get(url, json, store = {}) {
    const {
      state = {
        origin: ''
      }
    } = store;
    const headers = {};
    if (EASY_ENV_IS_NODE) {
      headers['x-csrf-token'] = state.csrf;
      headers.Cookie = `csrfToken=${state.csrf}`;
    }
    return new Promise((reslove, reject) => {
      axios.post(`${state.origin}${url}`, {
        apiMethods: 'get',
        data: json,
      }, {
        headers
      }).then(res => {
        if (res.status !== 200) {
          throw res.data;
        } else {
          reslove(res.data);
        }
      }).catch(e => {
        reject(e);
      });
    });
  },
  // get(url, store = {}) {
  //   const {
  //     state = {
  //       origin: ''
  //     }
  //   } = store;
  //   return axios.get(`${state.origin}${url}`);
  // }
};