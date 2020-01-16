'use strict';

const middlewareAction = (store, action) => {
    const [point] = action.actions;

    if (action.promise.constructor.name === 'Promise') {
        action.promise.then((data) => {
            store.dispatch({
                type: point.toUpperCase(),
                data,
            });
        }, (error) => {
            store.dispatch({
                type: point.toUpperCase(),
                error,
            });
        });
    } else {
        store.dispatch({
            type: point.toUpperCase(),
            data: action.promise
        });
    }
};

export default middlewareAction;