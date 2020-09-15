import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

class Searchbar extends Component {
  state = {
    searchWord: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.searchWord);
  };

  handleInputChange = (e) => this.setState({ searchWord: e.target.value });

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={styles["SearchForm-button"]}>
            <span className={styles["SearchForm-button-label"]}>Search</span>
          </button>
          <input
            className={styles["SearchForm-input"]}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchWord}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
