import noop from 'lodash/noop';

export default {
  getComponent(nextState, component) {
    import('./main').then((mad) => component(null, mad.default)).catch(() => noop);
  },
};
