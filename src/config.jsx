let auth_url, main_url, sup_url;

if (process.env.NODE_ENV === 'development') {
    console.log('development: OK');
    auth_url = 'http://core.localdev';
    main_url = 'http://core.localdev';
    sup_url  = 'http://core.localdev';
} else {
    auth_url = 'http://core.mes.local';
    main_url = 'http://core.mes.local';
    sup_url  = 'http://core.mes.local';
}

process.env['API']      = main_url;
process.env['API_DEV']  = main_url;
process.env['API_AUTH'] = auth_url;
process.env['API_SUP']  = sup_url;

process.env['SET_POINT']    = '/?r=';
process.env['PREFIX_TOKEN'] = '&';

process.env['ERROR_404'] = 'Страница не найдена';
process.env['ERROR_403'] = 'У Вас нет права доступа.';
process.env['ERROR_423'] = 'У Вас нет доступа к запрошенным данным.';
process.env['ERROR_417'] = 'Не определенная ошибка';
process.env['ERROR_500'] = 'Сервер занят. Попробуйте зайти чуть позже.';