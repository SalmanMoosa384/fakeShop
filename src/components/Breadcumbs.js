import React from "react";

export const Breadcumbs = ({ title }) => {
  return (
    <div className="section">
      <div className="breadcrumb-area bg-light">
        <div className="container-fluid">
          <div className="breadcrumb-content text-center">
            <h1 className="title">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcumbs;
