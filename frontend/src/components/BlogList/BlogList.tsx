import React from "react";
import classes from "./BlogList.module.scss";
import Title from "UI/Title/Title";
import BigBlogItem from "UI/BigBlogItem/BigBlogItem";

const BlogList = () => {
  return (
    <div className={classes.blog__list}>
      <Title>Fashion blog</Title>

      <div className={classes.blog__list__list}>
        <BigBlogItem />
        <BigBlogItem />
        <BigBlogItem />
      </div>
    </div>
  );
};

export default BlogList;
