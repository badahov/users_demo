'use strict';

import appConfig from "config";
import config from "../../config";

export function apiAuthLogin(data)
{
    const url = appConfig.domain.auth + appConfig.server.setPoint + config.api.auth;

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
