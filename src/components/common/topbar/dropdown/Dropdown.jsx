import React from "react";
import "./dropdown.css";
import { Link } from "react-router-dom";

const Dropdown = ({ dropdata }) => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        <div className="mt4"></div>
        {dropdata.map((item, index) => (
          <li key={index}>
            <Link
              className="dropdown-link"
              to={item.path}
              onClick={() => setClick(false)}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </div>
    </>
  );
};

export default Dropdown;
