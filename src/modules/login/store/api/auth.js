'use strict';

const api = process.env['API_AUTH'];

export function apiAuthLoginDefault() {
    return {
        login: '',
        password: '',
    };
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
