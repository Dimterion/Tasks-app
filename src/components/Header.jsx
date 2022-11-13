import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ text }) {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>{text}</h1>
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Projects",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
