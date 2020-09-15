import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

import ImageGalleryItem from "../ImageGalleryItem";

class ImageGallery extends Component {
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevProps.images.length < this.props.images.length;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  render() {
    const { images, onImageClick } = this.props;
    return (
      <ul className={styles.ImageGallery}>
        {images.map(({ id, webformatURL }) => (
          <ImageGalleryItem
            key={`${id}_${Math.random()}`}
            id={id}
            src={webformatURL}
            clickHandler={onImageClick}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
