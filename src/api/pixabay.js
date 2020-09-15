import axios from "axios";

import key from "./key";

const fetchImagesWithQuery = (query, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12&delay=5000
`
    )
    .then((response) => response.data.hits);
};

export default {
  fetchImagesWithQuery,
};
