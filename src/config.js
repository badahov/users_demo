'use strict';

import {hashHistory} from 'react-router';
import toastr from 'toastr';

toastr.options = {
    closeButton: true,
    progressBar: true,
    showMethod: 'slideDown',
    timeOut: 4000
};

let api, auth;

if (process.env.NODE_ENV === 'development') {
    console.log('Development');
    api  = 'http://core.localdev';
    auth = 'http://core.localdev';
} else {
    api  = 'http://core.mes.local';
    auth = 'http://core.mes.local';
}

export default {
    action: {

    },
    history: hashHistory,

    page: {
        login: () => {
            hashHistory.push('/login');
        },
        home: () => {
            hashHistory.push('/');
        },
    },

    message: {
        error: message => {
            toastr.error(message);
        },
        success: message => {
            toastr.success(message);
        },
    },
    server: {
        setPoint: '/?r=',
        prefix: '&',
    },
    domain: {
        api: api,
        auth: auth,
    },
    error: {
        200: 'Ok',
        401: 'Ошибка логина или пароля',
        404: 'Страница не найдена',
        403: 'У Вас нет права доступа',
        423: 'У Вас нет доступа к запрошенным данным',
        417: 'Не определенная ошибка',
        500: 'Сервер занят. Попробуйте зайти чуть позже'
    }
}
