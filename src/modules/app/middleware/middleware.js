import toUpper from 'lodash/toUpper';

const middlewareAction = (store, action) => {
    const [point] = action.actions;

    if (action.promise.constructor.name === 'Promise') {
        action.promise.then((data) => {
            store.dispatch({
                type: toUpper(point),
                data,
            });
        }, (error) => {
            store.dispatch({
                type: toUpper(point),
                error,
            });
        });
    } else {
        store.dispatch({
            type: toUpper(point),
            data: action.promise
        });
    }
};

export default middlewareAction;
