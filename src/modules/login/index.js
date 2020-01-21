import noop from 'lodash/noop';

export default {
  path: '/login',
  getComponent(nextState, component) {
    import('./main').then((mad) => component(null, mad.default)).catch(() => noop);
  },
};
