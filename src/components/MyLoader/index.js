import React from "react";
import Loader from "react-loader-spinner";

const MyLoader = () => (
  <Loader
    style={{ margin: "auto" }}
    type="ThreeDots"
    color="#00BFFF"
    height={100}
    width={100}
  />
);

export default MyLoader;
