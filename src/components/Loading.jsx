import React from "react";
import Loader from "react-spinners/BarLoader";

const Loading = () => (
  <div className="flex justify-center items-center ">
    <Loader type="Puff" color="#00BFFF" height={550} width={80} />
  </div>
);
export default Loading;
