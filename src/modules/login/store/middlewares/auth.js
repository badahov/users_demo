'use strict';

import toastr from 'toastr';

import {getHomePage} from 'modules/app/component/core/auth';

const middleware = store => next => action => {
    switch( action.type )
    {
        case 'AUTH_LOGIN':
            const [startAction, successAction, failureAction] = action.actions;

            store.dispatch({
                type: startAction
            });

            action.promise.onload = function() {
                let result = JSON.parse(this.responseText);

                switch (action.promise.status) {
                    case 403:
                        toastr.error("Недостаточно прав");
                        break;
                    case 401:
                        toastr.error('Ошибка логина или пароля.');
                        break;
                    case 200:
                        if (result.status !== 'error') {
                            getHomePage();
                        }
                        break;
                }
            };

            action.promise.onerror = function() {
                    toastr.error('Error');
            };
            break;
        case 'AUTH_CURRENT_USER':
            const [startCurrentUserAction, successCurrentUserAction, failureCurrentUserAction] = action.actions;

            store.dispatch({
                type: startCurrentUserAction
            });

            action.promise.onload = function() {
                let data = JSON.parse(this.responseText);

                switch (action.promise.status) {
                    case 403:
                        toastr.error("Недостаточно прав");
                        break;
                    case 401:
                        toastr.error('Ошибка логина или пароля.');
                        break;
                    case 200:
                        if (data.status !== 'error') {
                            store.dispatch({
                                type: successCurrentUserAction,
                                data: data.result
                            });
                        }
                        break;
                }
            };
            break;
        default:
            return next(action);
            break;
            case 'AUTH_FORGOT_PASSWORD':
                const [startForgotPassAction, successForgotPassAction, failureForgotPassAction] = action.actions;

                store.dispatch({
                    type: startForgotPassAction
                });

                action.promise.onload = function()
                {
                    let result = JSON.parse( this.responseText );

                    if( result.error === 'AUTH_FORGOT_PASSWORD_NOT_ALLOWED' )
                    {
                        toastr.error( 'Ошибка LOGIN.' );
                    } else {
                        getHomePage();
                    }
                };

                action.promise.onerror = function()
                {
                    let result = JSON.parse( this.responseText );

                    if( result.status == 403 ) {
                        toastr.error( "Недостаточно прав" );
                    } else {
                        toastr.error('Error');
                    }
                };
                break;
    }

};

export default middleware;
