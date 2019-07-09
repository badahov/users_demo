'use strict';

const middleware = store => next => action => {

    switch( action.type )
    {
        case 'PERMISSION':
        case 'ROLE':
            const [startRoleAction, successRoleAction, failureRoleAction] = action.actions;

            store.dispatch({
                type: startRoleAction,
            });

            action.promise.then((data) => {
                store.dispatch({
                    type: successRoleAction,
                    data,
                });
            }, (error) => {
                store.dispatch({
                    type: failureRoleAction,
                    error,
                });
            });

            break;
        default:
            return next( action );
            break;
    }
};

export default middleware;
