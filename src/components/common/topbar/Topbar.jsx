import React, { useState } from "react";
import "./topbar.css";
import whitelogo from "../../../images/whitelogo.png";
import search from "../../../images/search.png";
import togle from "../../../images/togle.png";
import untogle from "../../../images/untogle.png";
import Dropdown from "./dropdown/Dropdown";
import { FaBars, FaArrowAltCircleDown } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { BsFillCaretDownFill } from "react-icons/bs";

import Dropdownside from "./dropdownside/Dropdownside";
import {
  navlist,
  academiclist,
  articlelist,
  accountdroplist,
  companydroplist,
} from "./topbarData";
import { Link } from "react-router-dom";

export default function Topbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  const handleClick = () => setClick(!click);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };
  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
    }
  };

  const onMouseLeave3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(false);
    }
  };

  return (
    <div className="topbar">
      <div className="upss">
        <div className="imgname">
          <img src={whitelogo} alt="" />
          <div className="name">
            <h2>ARCTIC TERN</h2>
            <h3>WRITERS</h3>
          </div>
        </div>

        <ul className="largescreen">
          <li onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
            <Link to="/">
              Company
              <BsFillCaretDownFill className="topicon" />
            </Link>
            {dropdown2 && (
              <Dropdown
                dropdata={companydroplist}
                sidedropdata={companydroplist}
              />
            )}
          </li>

          <li onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}>
            <Link to="services">
              Services <BsFillCaretDownFill className="topicon" />
            </Link>
            {dropdown3 && (
              <Dropdownside
                articlelist={articlelist}
                academiclist={academiclist}
              />
            )}
          </li>

          <li>
            <Link to="order">Ordernow</Link>
          </li>

          <li>
            <Link to="pricing">Pricing</Link>
          </li>

          <li>
            <Link to="contact">Contact</Link>
          </li>

          <li>
            <Link to="blog">Blog</Link>
          </li>
          <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to="login">
              Account
              <BsFillCaretDownFill className="topicon" />
            </Link>
            {dropdown && <Dropdown dropdata={accountdroplist} />}
          </li>
        </ul>

        <div className="search">
          <input type="text" placeholder="Search.." />
          <img src={search} alt="" />
        </div>

        <div className="togle">
          {click === false ? (
            <FaBars
              className="icon"
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
            />
          ) : (
            <MdOutlineCancel
              className="icon"
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
            />
          )}
        </div>
      </div>
      <div className={click ? "downs" : "nodowns"}>
        {navlist.map((list, index) => (
          <li key={index}>
            <Link to={list.path}>{list.text}</Link>
          </li>
        ))}
      </div>
    </div>
  );
}
