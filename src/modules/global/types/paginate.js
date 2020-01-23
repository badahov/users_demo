import PropTypes from 'prop-types';

export default PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.object,
  PropTypes.array,
]);
