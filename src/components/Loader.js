import React from "react";

export const Loader = ({ position }) => {
  return (
    <div className="loader_main" style={{ position: position }}>
      <button className="loader">
        <span className="spinner"></span>
        <span className="loader__text">loading...</span>
      </button>
    </div>
  );
};

export default Loader;
