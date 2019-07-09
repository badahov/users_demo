'use strict';

const middleware = store => next => action => {

    switch(action.type) {
        case 'USER_CURRENT':
        case 'USER_ITEM':
            const [startAction, successAction, failureAction] = action.actions;

            //LOADING
            store.dispatch({
                type: startAction,
                data: 'start'
            });

            action.promise.then((data) => {
                //LOADED
                store.dispatch({
                    type: successAction,
                    data,
                });

                //LOADING
                store.dispatch({
                    type: startAction,
                    data: 'end'
                });
            }, (error) => {
                //FAILURE
                store.dispatch({
                    type: failureAction,
                    error,
                });
            });

            break;
        default:
            return next(action);
            break;
    }
};

export default middleware;
