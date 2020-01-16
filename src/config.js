'use strict';

import { hashHistory } from 'react-router';
import { message, notification } from 'antd';

let api, auth;

if (process.env.NODE_ENV === 'development') {
    console.log('Development');
    api  = 'https://yii.vitaopus.ru';
    auth = 'https://yii.vitaopus.ru';
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
        error: msg => {
            notification['error']({
                message: msg
            });
        },
        success: msg => {
            message.success(msg);
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
