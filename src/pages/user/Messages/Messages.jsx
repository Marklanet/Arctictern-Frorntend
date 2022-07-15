import React from "react";
import "./messages.css";
import Nav from "../../../components/common/Nav/Nav";

const Messages = () => {
  return (
    <section className="messages mb">
      <Nav heading="Messages" />
      <div className="filter">
        <button>All</button>
        <button>Read</button>
        <button>Unread</button>
        <button>Starred</button>
      </div>
      <div className="chch">
        <div className="revhold">
          <h1>No Messages Found</h1>
        </div>
      </div>
    </section>
  );
};

export default Messages;
