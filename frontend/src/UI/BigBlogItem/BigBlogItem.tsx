import React from "react";
import classes from "./BigBlogItem.module.scss";
import postImg from "./images/post.png";
import { TbMessageCircle2 } from "react-icons/tb";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const BigBlogItem = () => {
  const navigate = useNavigate();

  const click = () => {
    navigate("/1");
  };
  return (
    <div className={classes.big__post} onClick={click}>
      <img src={postImg} alt="post" className={classes.big__post__image} />
      <div className={classes.big__post__content}>
        <div className={classes.big__post__content__header}>
          <span className={classes.big__post__content__header__text}>
            Celebrity Style
          </span>
          <span className={classes.big__post__content__header__divider} />
          <span className={classes.big__post__content__header__text}>
            <AiOutlineClockCircle /> August 5, 2020
          </span>
          <span className={classes.big__post__content__header__divider} />
          <span className={classes.big__post__content__header__text}>
            <TbMessageCircle2 /> No comments
          </span>
        </div>
        <h3 className={classes.big__post__content__title}>
          Wardrobe Essentials Everyone Should Own Today
        </h3>
        <p className={classes.big__post__content__description}>
          Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla
          viverra amet, mi interdum blandit. Tellus sed morbi massa quis sed.
          Faucibus tincidunt magna enim ultricies fringilla at rhoncus, hac...
        </p>
      </div>
    </div>
  );
};

export default BigBlogItem;
