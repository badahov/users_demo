'use strict';

const middlewareAction = (store, action) => {
    const [start, success, failure] = action.actions;

    if (action.promise.constructor.name === 'Promise') {
        //LOADING
        store.dispatch({
            type: start,
            data: true
        });

        action.promise.then((data) => {
            //LOADED
            store.dispatch({
                type: success,
                data,
            });

            //LOADING
            store.dispatch({
                type: start,
                data: false
            });
        }, (error) => {
            //FAILURE
            store.dispatch({
                type: failure,
                error,
            });
        });
    } else {
        store.dispatch({
            type: start,
            data: true
        });

        store.dispatch({
            type: success,
            data: action.promise
        });

        //LOADING
        store.dispatch({
            type: start,
            data: false
        });
    }
};

export default middlewareAction;