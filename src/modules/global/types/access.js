import PropTypes from 'prop-types';

export default PropTypes.shape({
  user: PropTypes.objectOf(PropTypes.bool),
  role: PropTypes.objectOf(PropTypes.bool),
});
