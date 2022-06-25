import React from "react";
import "./dropdownside.css";
import { Link } from "react-router-dom";

const Dropdownside = ({ articlelist, academiclist }) => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        <div className="mt4"></div>
        <li>
          <Link
            className="dropdown-link"
            to="services"
            onClick={() => setClick(false)}
          >
            All Services
          </Link>
        </li>

        <div class="dropdown">
          <li>
            <Link
              className="dropdown-link"
              to="articles"
              onClick={() => setClick(false)}
            >
              Article Services
            </Link>
          </li>

          <div class="dropdown-content">
            {articlelist.map((item, index) => (
              <a key={index} href={item.path} onClick={() => setClick(false)}>
                {item.text}
              </a>
            ))}
          </div>
        </div>
        <div class="dropdown">
          <li>
            <Link
              className="dropdown-link"
              to="academics"
              onClick={() => setClick(false)}
            >
              Academic Services
            </Link>
          </li>

          <div class="dropdown-content">
            {academiclist.map((item, index) => (
              <a key={index} href={item.path} onClick={() => setClick(false)}>
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdownside;
