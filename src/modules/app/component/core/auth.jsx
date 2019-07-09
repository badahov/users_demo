'use strict';

import Cookies from 'js-cookie';
import {hashHistory} from 'react-router';
import toastr from "toastr";

const api = process.env['API_AUTH'];

toastr.options = {
    closeButton: true,
    progressBar: true,
    showMethod: 'slideDown',
    timeOut: 4000
};

export function addToken( token )
{
    Cookies.set('token', token );
}

export function getToken()
{
    return Cookies.get('token');
}

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
            case 401:
                //toastr.error("Требуется авторизация");

                //Пользователь не авторизован на сервере авторизации

                loginPage();
                break;
            case 200:
                //Получаем токен с сервера авторизации
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
                        case 401:
                            //toastr.error("Требуется авторизация");

                            //Пользователь не авторизован
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

export function removeToken()
{
    Cookies.remove('token');
    loginPage();
}

export function getHomePage()
{
    hashHistory.push('/');
}

export function requireAuth(nextState, replaceState)
{
    const token = Cookies.get('token');

    if (typeof token === 'undefined') {
        replaceState({nextPathname: nextState.location.pathname}, '/login');
    } else {
        //console.log( 'token', token );
    }
}

export function responseAuth(result)
{
    if (result.error === "TOKEN_FAIL") {
        Cookies.remove('token');
        loginPage();
    } else {
        return true;
    }
}
