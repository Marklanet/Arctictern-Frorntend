import React from "react";
import "./blogsearch.css";
import cover from "../../../images/about2.png";

const Blogsearch = ({ formSubmit, value, handleSearchKey, clearSearch }) => {
  return (
    <div className="blogsearch mb4">
      <div className="container">
        <span>Welcome to Blog Page</span>
        <form onSubmit={formSubmit} className="boxshadow1">
          <input
            type="text"
            placeholder="Search by Category"
            value={value}
            onChange={handleSearchKey}
          />
          {value && <span onClick={clearSearch}>X</span>}
          <button>Search</button>
        </form>
      </div>
      <img src={cover} alt="" />
    </div>
  );
};

export default Blogsearch;
