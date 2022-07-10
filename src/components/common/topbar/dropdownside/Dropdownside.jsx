import React from "react";
import "./dropdownside.css";
import { Link } from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";

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
              to="/services/article"
              onClick={() => setClick(false)}
            >
              Article Services
              <BsFillCaretRightFill className="topicon" />
            </Link>
          </li>

          <div class="dropdown-content">
            {articlelist.map((item, index) => (
              <Link
                className="dropdown-link2"
                key={index}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
        <div class="dropdown">
          <li>
            <Link
              className="dropdown-link"
              to="/services/academic"
              onClick={() => setClick(false)}
            >
              Academic Services
              <BsFillCaretRightFill className="topicon" />
            </Link>
          </li>

          <div class="dropdown-content">
            {academiclist.map((item, index) => (
              <Link
                className="dropdown-link2"
                key={index}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdownside;
