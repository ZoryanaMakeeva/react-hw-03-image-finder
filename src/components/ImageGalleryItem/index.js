import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const ImageGalleryItem = ({ id, src, clickHandler }) => {
  const onClick = (e) => clickHandler(e, id);

  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={src}
        alt=""
        className={styles["ImageGalleryItem-image"]}
        onClick={onClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
