'use strict';

const fetch = require('isomorphic-fetch');
import toastr from 'toastr';
import {requestXdomainToken} from './auth';

toastr.options = {
    closeButton: true,
    progressBar: true,
    showMethod: 'slideDown',
    timeOut: 4000
};

export default class ReactQuery
{
    static post = 'POST';
    static get  = 'GET';

    type     = 'POST';
    data     = null;
    pointApi = null;
    domain   = (process.env.NODE_ENV === 'production')? process.env.API : process.env.API_DEV;

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
                        toastr.success(json.msg);
                    }

                    if (json.result) {
                        return json.result;
                    } else {
                        return true;
                    }
                } else if(json.msg) {
                    toastr.error(this._errorMsg(json.msg));

                    return false;
                }
            }
        });
    };

    _getUrl = () => {
        let url    = '';

        if (this.type === ReactQuery.get) {
            let get = null;

            if (this.data) {
                get = this._getParams(this.data);
            }

            url = get ? this.domain + process.env.SET_POINT + this.pointApi + '&' + get :this.domain + process.env.SET_POINT + this.pointApi;
        } else {
            url = this.domain + process.env.SET_POINT + this.pointApi;
        }

        return url;
    };

    _getFetchParam = () => {
        let fetchParam = {};

        if (this.type === ReactQuery.get) {
            fetchParam = {
                method: ReactQuery.get,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            }
        } else {
            fetchParam = {
                method: ReactQuery.post,
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
                toastr.error( process.env.ERROR_500 );
                throw response.statusText;
            } else if( response.status === 404 ) {
                toastr.error( process.env.ERROR_404 );
                throw response.statusText;
            } else if( response.status === 417 ) {
                const res = response.json();
                res.then((data) => {
                    if (!data.status) {
                        toastr.error(this._errorMsg(data.msg));
                    } else {
                        toastr.error(process.env.ERROR_417);
                    }
                });
                throw response.statusText;
            } else if(response.status === 423) {
                toastr.error(process.env.ERROR_423);
                throw response.statusText;
            } else if(response.status === 401) {
                requestXdomainToken(url);
            } else if(response.status === 403) {
                toastr.error(process.env.ERROR_403);
                throw response.statusText;
            } else {
                throw response.statusText;
            }
        });
    };

    _errorMsg = (param) => {
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
}
