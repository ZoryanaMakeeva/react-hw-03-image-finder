import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const Button = ({ handleClick }) => (
  <button className={styles.Button} onClick={handleClick}>
    Load more
  </button>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Button;
