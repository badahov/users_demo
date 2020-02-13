import {
  BrowserRouter as Router,
} from 'react-router-dom';

import { message, notification } from 'antd';

let api = 'http://core.mes.local';
let auth = 'http://core.mes.local';

if (process.env.NODE_ENV === 'development') {
  // console.log('Development');
  // api = 'https://yii.vitaopus.ru';
  // auth = 'https://yii.vitaopus.ru';
  api = 'http://core.localdev';
  auth = 'http://core.localdev';
}

export default {
  action: {},
  history: Router,
  page: {
    login: () => {
      Router.push('/login');
    },
    home: () => {
      Router.push('/');
    },
  },
  //
  message: {
    error: (msg) => {
      notification.error({
        message: msg,
      });
    },
    success: (msg) => {
      message.success(msg);
    },
  },
  server: {
    setPoint: '/?r=',
    prefix: '&',
  },
  domain: {
    api,
    auth,
  },
  error: {
    200: 'Ok',
    401: 'Ошибка логина или пароля',
    404: 'Страница не найдена',
    403: 'У Вас нет права доступа',
    423: 'У Вас нет доступа к запрошенным данным',
    417: 'Не определенная ошибка',
    500: 'Сервер занят. Попробуйте зайти чуть позже',
  },
};
