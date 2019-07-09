'use strict';

import {hashHistory} from 'react-router';

const api = process.env['API_AUTH'];

export function requestXdomainToken(setUrl)
{
    //Запрашиваем токен на сервере авторизации
    const url = api + process.env['SET_POINT'] + '/auth/get-xdomain-token';
    let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    let xhr = new XHR();
    xhr.open('POST', url, true);
    xhr.withCredentials = true;
    xhr.send();

    xhr.onload = function()
    {
        switch (this.status) {
            case 401:// User is not authorized on the authorization server
                loginPage();
                break;
            case 200:
                let result = JSON.parse(this.responseText);

                let arr = setUrl.split("/");
                let domain = arr[0] + "//" + arr[2];
                let domainAuth = domain + process.env['SET_POINT'] + 'auth/login';

                //Отправляем токен в точку авторизации целевого сервера
                let formData = new FormData();
                formData.append('xdomainToken', result.xdomainToken);
                let xhr = new XMLHttpRequest();
                xhr.open('POST', domainAuth, true);
                xhr.withCredentials = true;
                xhr.send(formData);

                xhr.onload = function()
                {
                    let result = JSON.parse(this.responseText);

                    switch (this.status) {
                        case 401:// User is not authorized
                            loginPage();
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

function loginPage()
{
    hashHistory.push('/login');
}

export function getHomePage()
{
    hashHistory.push('/');
}
