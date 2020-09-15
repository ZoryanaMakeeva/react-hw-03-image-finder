import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

class Modal extends Component {
  closeModal = (e) => {
    e.target.tagName !== "IMG" && this.props.closeModal();
  };

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.closeModal(e);
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div className={styles.Overlay} onClick={this.closeModal}>
        <div className={styles.Modal}>
          <img src={this.props.src} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
