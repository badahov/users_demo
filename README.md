# SPA Users and roles

### Installation

#### Packages:
JavaScript FrameWork: [ReactJS](https://facebook.github.io/react)

Store: [React Redux](https://www.npmjs.com/package/react-redux)

Component FrameWork: [Ant designer](https://www.npmjs.com/package/antd)

Install using [npm](https://www.npmjs.com/):

    $ npm install

Build

    $ npm run pro

Start dev server

    $ npm run start

Test

    $ npm run test

Browser

    $ http://127.0.0.1:3000

App config: ./src/config.js

```js
[
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
]
```
