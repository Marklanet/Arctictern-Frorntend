import React from "react";
import Blogsearch from "../../../components/reusable/blogsearch/Blogsearch";
import "./blogs.css";
import { blogList } from "../blogData";
import BlogList from "../../../components/bloglist/Bloglist";
import EmptyList from "../../../components/reusable/emptylist/Emptylist";
import Categories from "../../../components/reusable/categories/Categories";
import Quicklinks from "../../../components/reusable/quicklinks/Quicklinks";

const Blogs = () => {
  const [blogs, setBlogs] = React.useState(blogList);
  const [searchKey, setSearchKey] = React.useState("");

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <>
      <section className="blogs mb">
        <Blogsearch
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />
        <div className="down ">
          <div className="content mt">
            {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
          </div>
          <div className="sidebar mt">
            <div className="cat ">
              <Categories
                handleCategory={(value) => {
                  setSearchKey(value);
                }}
                formSubmit={handleSearchBar}
              />
            </div>
            <div className="links mt ">
              <Quicklinks />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
