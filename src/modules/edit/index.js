import noop from 'lodash/noop';

export default {
  path: 'user/edit/:userId/:page',
  getComponent(nextState, component) {
    import('./main').then((mad) => component(null, mad.default)).catch(() => noop);
  },
};
