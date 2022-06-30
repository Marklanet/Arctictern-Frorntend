import React from "react";
import "./categories.css";
import { blogcategories } from "../../../pages/blog/blogData";

import { GiCheckMark } from "react-icons/gi";

const Categories = ({ formSubmit, handleCategory }) => {
  return (
    <div className="categories">
      <div className="instance">
        <h2>Categories</h2>
        <div className="checks">
          {blogcategories.map((item, index) => (
            <li
              className="check"
              key={index}
              onClick={(e) => {
                e.preventDefault();
                handleCategory(item.cat);
              }}
            >
              <GiCheckMark className="importedicons" />
              <h3>{item.cat}</h3>
            </li>
          ))}
        </div>

        <button onClick={formSubmit}>filter</button>
      </div>
    </div>
  );
};

export default Categories;
