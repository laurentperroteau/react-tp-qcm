import React from 'react';
import PropTypes from 'prop-types';

const Button = ({label, isDisabled, onClick}) => {

  return (
    <button
      type="submit"
      className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
      disabled={isDisabled}
      onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default Button;
