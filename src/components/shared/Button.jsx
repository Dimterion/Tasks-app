import PropTypes from "prop-types";

function Button({ children, version, type, isDisabled, handleClick }) {
  return (
    <button
      onClick={handleClick}
      type={type}
      disabled={isDisabled}
      className={`btn btn-${version}`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Button;
