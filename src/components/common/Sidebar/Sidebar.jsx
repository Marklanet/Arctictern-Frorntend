import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { RiDashboard2Fill, RiMoneyDollarCircleLine } from "react-icons/ri";
import {
  MdOutlineRateReview,
  MdMessage,
  MdOutlineCancel,
} from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaBorderAll, FaBars } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";

const Sidebar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="sidebar">
      <ul className={click ? "noside2  " : "side2"}>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          <Link className="dropdown-link2" to="dashboard">
            <RiDashboard2Fill className="importedicon" />
            <span>Dashboard</span>
          </Link>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          <Link className="dropdown-link2" to="order">
            <FaBorderAll className="importedicon" />
            <span>My Orders</span>
          </Link>
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          <Link className="dropdown-link2" to="profile">
            <BsPersonSquare className="importedicon" />
            <span>My Profile</span>
          </Link>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          <Link className="dropdown-link2" to="payment">
            <RiMoneyDollarCircleLine className="importedicon" />
            <span>Payment</span>
          </Link>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          <Link className="dropdown-link2" to="messages">
            <MdMessage className="importedicon" />
            <span>Message</span>
          </Link>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          <Link className="dropdown-link2" to="reviews">
            <MdOutlineRateReview className="importedicon" />
            <span>Reviews</span>
          </Link>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          <Link className="dropdown-link2" to="support">
            <FiPhoneCall className="importedicon" />
            <span>Support</span>
          </Link>
        </button>
      </ul>
      <div
        className={click ? "notogle2" : "toggle2"}
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        {click === true ? (
          <FaBars
            className="icon2"
            onClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
          />
        ) : (
          <MdOutlineCancel
            className="icon2"
            onClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
