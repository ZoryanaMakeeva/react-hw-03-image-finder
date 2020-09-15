import React, { Component } from "react";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import MyLoader from "./components/MyLoader";
import Modal from "./components/Modal";

import styles from "./App.module.css";
import pixabay from "./api/pixabay";

class App extends Component {
  state = {
    images: [],
    pageNumber: 1,
    query: "",
    isLoading: false,
    largeImageURL: "",
    error: "",
  };

  handleSubmit = (query) => {
    const { pageNumber } = this.state;
    this.setState({ isLoading: true, pageNumber: 1, query });
    pixabay
      .fetchImagesWithQuery(query, pageNumber)
      .then((hits) => {
        this.setState(({ pageNumber }) => ({
          images: hits,
          pageNumber: pageNumber + 1,
          error: "",
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleLoadMore = () => {
    const { pageNumber, query } = this.state;
    this.setState({ isLoading: true });
    pixabay
      .fetchImagesWithQuery(query, pageNumber)
      .then((hits) => {
        this.setState(({ images, pageNumber }) => ({
          images: [...images, ...hits],
          pageNumber: pageNumber + 1,
          error: "",
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onImageClick = (e, id) => {
    const { images } = this.state;
    const { largeImageURL } = images.find((img) => img.id === id);
    this.setState({ largeImageURL });
  };

  closeModal = () => {
    this.setState({ largeImageURL: "" });
  };

  render() {
    const { images, isLoading, largeImageURL, error } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery images={images} onImageClick={this.onImageClick} />
        {images.length > 0 && !isLoading && (
          <Button handleClick={this.handleLoadMore} />
        )}
        {isLoading && <MyLoader />}
        {largeImageURL && (
          <Modal src={largeImageURL} closeModal={this.closeModal} />
        )}
        {error && `Oops, something went wrong: ${error}`}
      </div>
    );
  }
}

export default App;
