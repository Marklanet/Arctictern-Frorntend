import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogList } from "../blogData";
import Chip from "../../../components/reusable/Chip/Chip";
import EmptyList from "../../../components/reusable/emptylist/Emptylist";
import { BiLike, BiDislike } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";
import "./singleblog.css";
import { Link } from "react-router-dom";

const Singleblog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className="blog-goBack" to="/blogs">
        <span className="blog-back"> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className="blog-wrap mb">
          <header>
            <p className="blog-date">Updated {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" />
          <p className="blog-desc">{blog.description}</p>
          <footer>
            <h3>About Author</h3>
            <div className="top-footer ">
              <div className="author">
                <div className="image-name">
                  <img src={blog.authorAvatar} alt="cover" />
                  <h4>{blog.authorName}</h4>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Praesentium repudiandae quo distinctio illo nemo natus iste
                    numquam deserunt minima fuga, a officiis eaque aut? Odio
                    voluptas ratione voluptatibus ab mollitia.
                  </p>
                </div>
              </div>
            </div>

            <div className="bottom-footer ">
              <h3>Comment on this blog</h3>
              <div className="icons">
                <BiLike className="icon" />
                <BiDislike className="icon" />
                <FaShareAlt className="icon" />
              </div>
            </div>
            <div className="comment ">
              <textarea type="text" placeholder="write a comment" />
            </div>
            <button>Post Comment</button>
          </footer>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Singleblog;
