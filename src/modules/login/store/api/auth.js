'use strict';

import {getToken} from 'modules/app/component/core/auth';

const api = process.env['API_AUTH'];

export function apiAuthLoginDefault() {
    return {
        login: '',
        password: '',
    };
}

export function apiAuthCurrentUser()
{
    const url = api + process.env['SET_POINT'] + 'interface-users/user-current';

    let formData = new FormData();
    let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    let xhr = new XHR();
    xhr.withCredentials = true;
    xhr.open('GET', url, true);
    xhr.send();

    return xhr;
}

export function apiAuthLoginforgotPass(data)
{
    const token = getToken();

    const url = api + 'api/users/pass_restoring/?token=' + token;

    var formData = new FormData();

    for( var key in data )
    {
        formData.append(key, data[key] );
    }

    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

    var xhr = new XHR();

    xhr.open('POST', url, true);

    xhr.send( formData );

    return xhr;
}

export function apiAuthLogin(data)
{
    const url = api + process.env['SET_POINT'] + '/auth/login';

    var formData = new FormData();

    for( var key in data )
    {
        formData.append(key, data[key] );
    }

    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

    var xhr = new XHR();

    xhr.open('POST', url, true);
    xhr.withCredentials = true;

    xhr.send( formData );

    return xhr;
}
