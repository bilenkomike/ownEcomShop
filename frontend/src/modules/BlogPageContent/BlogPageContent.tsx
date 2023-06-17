import React from "react";
import classes from "./BlogPageContent.module.scss";
import BlogList from "components/BlogList/BlogList";
import BlogSidebar from "components/BlogSidebar/BlogSidebar";

const BlogPageContent = () => {
  return (
    <section className={classes.blog__page}>
      <BlogList />
      <BlogSidebar />
    </section>
  );
};

export default BlogPageContent;
