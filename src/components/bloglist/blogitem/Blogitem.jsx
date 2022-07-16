import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../reusable/Chip/Chip";
import "./blogitem.css";

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className="blogItem-wrap">
      <img className="blogItem-cover" src={cover} alt="cover" />
      <Chip label={category} />
      <Link className="blogItem-link" to={`/blogs/${id}`}>
        <span>{title}</span>
      </Link>
      <p className="blogItem-desc">{description}</p>
      <footer>
        <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div className="namedate">
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className="blogItem-link" to={`/blogs/${id}`}>
          read more...
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
