import React from "react";
import {
  CommentStyled,
  CommentStyledAuthor,
  CommentStyledCommentActions,
  CommentStyledCommentBlock,
} from "./Comment.styled";
import Rating from "components/Rating/Rating";

import { BsFillReplyFill } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";

const Comment = () => {
  return (
    <CommentStyled>
      <CommentStyledAuthor>
        <h4>Devon Lane</h4>
        <time dateTime="month day, year">July 15, 2020</time>
        <Rating rating={5} absolute={false} />
      </CommentStyledAuthor>
      <CommentStyledCommentBlock>
        <p>
          <i>@Devon Lane</i> Phasellus varius faucibus ultrices odio in. Massa
          neque dictum natoque ornare rutrum malesuada et phasellus. Viverra
          natoque nulla cras vel nisl proin senectus. Tortor sed eleifend ante
          tristique felis sed urna aliquet. Suspendisse fames egestas sed duis
          purus diam et.
        </p>

        <CommentStyledCommentActions>
          <span>
            <BsFillReplyFill /> Reply
          </span>
          <span>
            <i>
              <BiLike /> 2
            </i>
            <i>
              <BiDislike /> 0
            </i>
          </span>
        </CommentStyledCommentActions>
      </CommentStyledCommentBlock>
    </CommentStyled>
  );
};

export default Comment;
