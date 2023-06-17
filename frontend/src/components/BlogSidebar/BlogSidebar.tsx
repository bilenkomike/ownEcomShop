import React, { useState, useEffect } from "react";
import classes from "./BlogSidebar.module.scss";
import Input from "components/Input/Input";
import Divider from "UI/Divider/Divider";
import axios from "axios";
import API_URL from "config";
import Tag from "UI/Tag/Tag";

import { AiOutlineClockCircle } from "react-icons/ai";

import postImage from "./images/post.png";

interface Category {
  id: number;
  posts_count: number;
  name: string;
}
interface Tag {
  id: number;
  tag: string;
}

const BlogSidebar = () => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState<Category[] | []>([]);
  const [tags, setTags] = useState<Tag[] | []>([]);

  useEffect(() => {
    axios.get(`${API_URL}blog-tags/`).then((response) => {
      setTags(response.data);
    });
  }, []);

  // get categories
  useEffect(() => {
    axios.get(`${API_URL}blog-categories`).then((response) => {
      let newCategories = [
        {
          id: 0,
          posts_count: 0,
          name: "All",
        },
      ];
      response.data.map((category: Category) => {
        newCategories.push(category);
        newCategories[0].posts_count += category.posts_count;
      });

      setCategories(newCategories);
    });
  }, []);

  const searchSubmitHandler: (e: React.FormEvent) => void = (e) => {
    e.preventDefault();
    if (search.trim().length <= 0) {
      return;
    }
    setSearch("");
    // searchp
    console.warn(search);
  };
  const updateSearch = (searchValue: string) => {
    setSearch(searchValue);
  };

  return (
    <div className={classes.blog__sidebar}>
      <form
        className={classes.blog__sidebar__search}
        onSubmit={searchSubmitHandler}
      >
        <Input
          name="mainsearchbar"
          variant="small"
          type="text"
          placeholder="Some text..."
          onChange={updateSearch}
          value={search}
          icon="search"
          iconTypes="submit"
        />
      </form>

      <Divider />
      <h4 className={classes.blog__sidebar__title}>Blog Categories</h4>
      <div className={classes.blog__sidebar__list}>
        {categories.length > 1 &&
          categories.map((category) => (
            <div
              className={[
                classes.blog__sidebar__category__item,
                category.id === 0 && classes.active,
              ].join(" ")}
              key={`${category.id}__blog__sidebbar__category`}
            >
              <h5>{category.name}</h5>
              <span> {category.posts_count}</span>
            </div>
          ))}
      </div>
      <Divider />
      <h4 className={classes.blog__sidebar__title}>Featured Posts</h4>
      <div className={classes.blog__sidebar__list}>
        <div className={classes.blog__feature__post}>
          <img
            src={postImage}
            alt=""
            className={classes.blog__feature__post__image}
          />
          <div className={classes.blog__feature__post__content}>
            <span className={classes.blog__feature__post__content__date}>
              <AiOutlineClockCircle /> July 5, 2020
            </span>
            <h3 className={classes.blog__feature__post__content__title}>
              14 Items From End-of-Spring Sales Are Sure to Spark Joy
            </h3>
          </div>
        </div>
        <div className={classes.blog__feature__post}>
          <img
            src={postImage}
            alt=""
            className={classes.blog__feature__post__image}
          />
          <div className={classes.blog__feature__post__content}>
            <span className={classes.blog__feature__post__content__date}>
              <AiOutlineClockCircle /> July 5, 2020
            </span>
            <h3 className={classes.blog__feature__post__content__title}>
              14 Items From End-of-Spring Sales Are Sure to Spark Joy
            </h3>
          </div>
        </div>
        <div className={classes.blog__feature__post}>
          <img
            src={postImage}
            alt=""
            className={classes.blog__feature__post__image}
          />
          <div className={classes.blog__feature__post__content}>
            <span className={classes.blog__feature__post__content__date}>
              <AiOutlineClockCircle /> July 5, 2020
            </span>
            <h3 className={classes.blog__feature__post__content__title}>
              14 Items From End-of-Spring Sales Are Sure to Spark Joy
            </h3>
          </div>
        </div>
      </div>
      <Divider />
      <h4 className={classes.blog__sidebar__title}>Tags</h4>
      <div className={classes.blog__sidebar__list}>
        {tags.length > 0 &&
          tags.map((tag) => (
            <Tag active={1} tag={tag.tag} id={tag.id} onClick={() => {}} />
          ))}
      </div>
    </div>
  );
};

export default BlogSidebar;
