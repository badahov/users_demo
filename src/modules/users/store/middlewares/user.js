'use strict';

const middleware = store => next => action => {
    switch(action.type) {
        case 'USER_ADD':
        case 'USER_DELETE':
        case 'USER_ITEMS':
        case 'USER_CURRENT':
        case 'USER_HEADER':
            const [startAction, successAction, failureAction] = action.actions;

            if (action.promise.constructor.name === 'Promise') {
                //LOADING
                store.dispatch({
                    type: startAction,
                    data: true
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
                        data: false
                    });
                }, (error) => {
                    //FAILURE
                    store.dispatch({
                        type: failureAction,
                        error,
                    });
                });
            } else {
                store.dispatch({
                    type: startAction,
                    data: true
                });

                store.dispatch({
                    type: successAction,
                    data: action.promise
                });

                //LOADING
                store.dispatch({
                    type: startAction,
                    data: false
                });
            }
            break;
        default:
            return next(action);
            break;
    }
};

export default middleware;
