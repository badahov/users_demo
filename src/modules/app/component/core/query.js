import isNil from 'lodash/isNil';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';
import map from 'lodash/map';
import keys from 'lodash/keys';
import split from 'lodash/split';
import config from '../../../../config';

const errorMsg = (param) => {
  if (isString(param)) {
    return param;
  }

  const str = ['<ul class="list-unstyled">'];
  const strLi = map(param, (item) => `<li>${item}</li>`);
  const newStr = str.concat(strLi);

  newStr.push('</ul>');

  return newStr.join(' ');
};

const getParams = (data) => (
  map(keys(data), (key) => `${key}=${encodeURIComponent(data[key])}`).join('&')
);

export default class Query {
  constructor(options) {
    this.type = isNil(options.type) ? 'POST' : options.type;
    this.data = isNil(options.data) ? null : options.data;
    this.pointApi = isNil(options.pointApi) ? null : options.pointApi;
    this.domain = isNil(options.domain) ? config.domain.api : options.domain;

    this.message = config.message;
    this.page = config.page;
  }

  send() {
    return this.fetch();
  }

  response = (json) => {
    let result = null;

    if (json !== undefined) {
      if (json.status === 'ok') {
        if (json.msg) {
          this.success(json.msg);
        }

        if (json.result) {
          result = json.result;
        } else {
          result = true;
        }
      } else if (json.msg) {
        this.error(errorMsg(json.msg));

        result = false;
      }
    }

    return result;
  };

  result(action = null) {
    if (isFunction(action)) {
      const responseBefore = action;

      return this.send().then(responseBefore).then(this.response);
    }

    return this.send().then(this.response);
  }

  getUrl() {
    let url = '';

    if (this.type === 'GET') {
      let get = null;

      if (this.data) {
        get = getParams(this.data);
      }

      url = get
        ? this.domain + config.server.setPoint + this.pointApi + config.server.prefix + get
        : this.domain + config.server.setPoint + this.pointApi;
    } else {
      url = this.domain + config.server.setPoint + this.pointApi;
    }

    return url;
  }

  getFetchParam() {
    let fetchParam = {};

    if (this.type === 'GET') {
      fetchParam = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      };
    } else {
      fetchParam = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.data),
        credentials: 'include',
      };
    }

    return fetchParam;
  }

  fetch() {
    const url = this.getUrl();
    const fetchParam = this.getFetchParam();

    return fetch(url, fetchParam).then((response) => {
      if (response.status === 200) {
        return response.json();
      }

      if (response.status === 500) {
        this.message.error(config.error[response.status]);
      } else if (response.status === 404) {
        this.message.error(config.error[response.status]);
      } else if (response.status === 423) {
        this.message.error(config.error[response.status]);
      } else if (response.status === 401) {
        this.requestXdomainToken(url);
      } else if (response.status === 403) {
        this.message.error(config.error[response.status]);
      } else if (response.status === 417) {
        this.message.error(config.error[response.status]);
      }

      return null;
    });
  }

  error(message) {
    this.message.error(message);
  }

  success(message) {
    this.message.success(message);
  }

  loginPage() {
    this.page.login();
  }

  requestXdomainToken(setUrl) {
    // We request a token on the authorization server
    const url = `${config.domain.auth}${config.server.setPoint}/auth/get-xdomain-token`;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.withCredentials = true;
    xhr.send();

    const self = this;
    xhr.onload = function onload() {
      if (xhr.status === 401) {
        self.loginPage();
      } else if (xhr.status === 200) {
        const result = JSON.parse(xhr.response);
        const arr = split(setUrl, '/');
        const domain = `${arr[0]}//${arr[2]}`;
        const domainAuth = `${domain}${config.server.setPoint}auth/login`;

        const formData = new FormData();
        formData.append('xdomainToken', result.xdomainToken);
        const xhrX = new XMLHttpRequest();
        xhrX.open('POST', domainAuth, true);
        xhrX.withCredentials = true;
        xhrX.send(formData);

        xhrX.onload = function onloadX() {
          if (xhrX.status === 401) {
            self.loginPage();
          } else if (xhrX.status === 200) {
            document.location.reload(true);
          }
        };
      }
    };
  }
}
