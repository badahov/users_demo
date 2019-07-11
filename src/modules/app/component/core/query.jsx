'use strict';

import config from 'config';

const fetch = require('isomorphic-fetch');

export default class Query
{
    static post = 'POST';
    static get  = 'GET';

    type     = 'POST';
    data     = null;
    pointApi = null;
    domain   = config.domain.api;

    constructor(options)
    {
        if (options.type !== undefined) {
            this.type = options.type;
        }

        if (options.data !== undefined) {
            this.data = options.data;
        }

        if (options.pointApi !== undefined) {
            this.pointApi = options.pointApi;
        }

        if (options.domain !== undefined) {
            this.domain = options.domain;
        }
    }

    send = () => {
        return this._fetch();
    };

    result = (callback = null) => {
        return this.send().then((json) => {
            if (callback instanceof Function) {
                return callback(json);
            } else {
                if (json.status === "ok") {
                    if (json.msg) {
                        this._success(json.msg);
                    }

                    if (json.result) {
                        return json.result;
                    } else {
                        return true;
                    }
                } else if(json.msg) {
                    this._error(this._errorMsg(json.msg));

                    return false;
                }
            }
        });
    };

    _getUrl = () => {
        let url    = '';

        if (this.type === Query.get) {
            let get = null;

            if (this.data) {
                get = this._getParams(this.data);
            }

            url = get ? this.domain + config.server.setPoint + this.pointApi + config.server.prefix + get : this.domain + config.server.setPoint + this.pointApi;
        } else {
            url = this.domain + config.server.setPoint + this.pointApi;
        }

        return url;
    };

    _getFetchParam = () => {
        let fetchParam = {};

        if (this.type === Query.get) {
            fetchParam = {
                method: Query.get,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            }
        } else {
            fetchParam = {
                method: Query.post,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.data),
                credentials: "include"
            }
        }

        return fetchParam;
    };

    _fetch = () => {
        const url      = this._getUrl();
        let fetchParam = this._getFetchParam();

        return fetch(url, fetchParam).then((response) => {
            if (response.status === 200) {
                return response.json();
            } else if (response.status === 500) {
                this._error(config.error[response.status]);
                throw response.statusText;
            } else if (response.status === 404) {
                this._error(config.error[response.status]);
                throw response.statusText;
            } else if (response.status === 417) {
                const res = response.json();
                res.then((data) => {
                    if (!data.status) {
                        this._error(this._errorMsg(data.msg));
                    } else {
                        this._error(config.error[response.status]);
                    }
                });
                throw response.statusText;
            } else if (response.status === 423) {
                this._error(config.error[response.status]);
                throw response.statusText;
            } else if (response.status === 401) {
                this._requestXdomainToken(url);
            } else if (response.status === 403) {
                this._error(config.error[response.status]);
                throw response.statusText;
            } else {
                throw response.statusText;
            }
        });
    };

    _error = message => {
        config.message.error(message);
    };

    _success = message => {
        config.message.success(message);
    };

    _errorMsg = param => {
        if (typeof(param) === 'string') {
            return param;
        } else {
            let str = ['<ul class="list-unstyled">'];
            param.map((item) =>
                str.push('<li>' + item + '</li>')
            );
            str.push('</ul>');

            return str.join(' ');
        }
    };

    _getParams = data => {
        return Object.keys(data).map(key => `${key}=${encodeURIComponent(data[key])}`).join('&');
    };

    _requestXdomainToken(setUrl) {
        //We request a token on the authorization server
        const url = config.domain.auth + config.server.setPoint + '/auth/get-xdomain-token';
        let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
        let xhr = new XHR();
        xhr.open('POST', url, true);
        xhr.withCredentials = true;
        xhr.send();

        let self = this;
        xhr.onload = function () {
            console.log('requestXdomainToken');

            switch (this.status) {
                case 401:// User is not authorized on the authorization server
                    self._loginPage();
                    break;
                case 200:
                    let result = JSON.parse(this.responseText);
                    let arr = setUrl.split("/");
                    let domain = arr[0] + "//" + arr[2];
                    let domainAuth = domain + config.server.setPoint + 'auth/login';

                    //Отправляем токен в точку авторизации целевого сервера
                    let formData = new FormData();
                    formData.append('xdomainToken', result.xdomainToken);
                    let xhr = new XMLHttpRequest();
                    xhr.open('POST', domainAuth, true);
                    xhr.withCredentials = true;
                    xhr.send(formData);

                    xhr.onload = function () {
                        switch (this.status) {
                            case 401:// User is not authorized
                                self._loginPage();
                                break;
                            case 200:
                                location.reload();
                                break;
                        }
                    };
                    break;
            }
        };
    }

    _loginPage() {
        config.history.push('/login');
    }
}
