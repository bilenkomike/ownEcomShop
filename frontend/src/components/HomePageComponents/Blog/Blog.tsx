import React from "react";
import BlogItem from "components/BlogItem/BlogItem";
import Button from "components/Button/Button";
import Title from "components/Title/Title";
import { BlogStyled, BlogStyledHeader, BlogStyledList } from "./Blog.styled";
import img from "./images/image.png";

const Blog: React.FC = () => {
  return (
    <BlogStyled>
      <BlogStyledHeader>
        <Title>Fashion Blog</Title>
        <Button styleType="default" size="small" variant="outlined">
          View blog
        </Button>
      </BlogStyledHeader>
      <BlogStyledList>
        <BlogItem img={img} />
        <BlogItem img={img} />
      </BlogStyledList>
    </BlogStyled>
  );
};

export default Blog;
