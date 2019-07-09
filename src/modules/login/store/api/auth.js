'use strict';

import config from "../../config";

const domain = process.env['API_AUTH'];
const api = config.api;

export function apiAuthLogin(data)
{
    const url = domain + process.env['SET_POINT'] + api.auth;

    const formData = new FormData();

    for (let key in data) {
        formData.append(key, data[key] );
    }

    const XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

    const xhr = new XHR();

    xhr.open('POST', url, true);
    xhr.withCredentials = true;

    xhr.send( formData );

    return xhr;
}
