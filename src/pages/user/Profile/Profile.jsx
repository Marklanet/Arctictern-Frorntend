import React from "react";
import "./profile.css";
import userimg from "../../../images/userimg.png";
import Nav from "../../../components/common/Nav/Nav";

const Profile = () => {
  return (
    <section className="profile mb">
      <Nav heading="My Account" />

      <div className="change-profile c_flex">
        <div className="image">
          <img src={userimg} alt="" />
          <button className="btn3">Change Name</button>
        </div>

        <form action="" className="change-form">
          <div className="inputs">
            <span>User Name: </span>
            <input type="text" name="" placeholder="Example" />
            <span>Email: </span>
            <input type="text" name="" placeholder="example@gmail.com" />
            <span>Phone: </span>
            <input type="text" name="" placeholder="+1-63426424" />
            <button className="btn3">Save Profile</button>
          </div>
        </form>

        <div className="seen-as">
          <h3>You will be seen as</h3>
          <div className="rate">
            <img src={userimg} alt="" />
            <div>
              <h5>Name</h5>
              <h6>Not rated yet</h6>
            </div>
          </div>

          <div className="c_flex progress">
            <span>0 Orders in progress</span>
            <span>0 Orders completed</span>
          </div>
        </div>
      </div>

      <form action="" className="change-password ">
        <h1>Change Password</h1>
        <div>
          <span>Old Password: </span>
          <input type="text" name="" placeholder="Example" />
        </div>

        <div>
          <span>New Password: </span>
          <input type="password" name="" placeholder="example@gmail.com" />
        </div>

        <div>
          <span>Confirm Password: </span>
          <input type="password" name="" placeholder="+1-63426424" />
        </div>
        <button className="btn3 ">Save</button>
      </form>
    </section>
  );
};

export default Profile;
