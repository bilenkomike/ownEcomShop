import React from "react";
import {
  BlogItemStyled,
  BlogItemStyledImage,
  BlogItemStyledTitle,
  BlogItemStyledAdditionalInfo,
  BlogItemStyledAdditionalInfoItem,
  BlogItemStyledShortDescription,
  BlogItemStyledAdditionalInfoDivider,
} from "./BlogItem.styled";

import { FaRegComment } from "react-icons/fa";

const BlogItem: React.FC<{ img: string }> = ({ img }) => {
  return (
    <BlogItemStyled style={{ marginRight: 10 }}>
      <BlogItemStyledImage src={img} />
      <BlogItemStyledTitle>Bag Trends for Summer 2020</BlogItemStyledTitle>
      <BlogItemStyledAdditionalInfo>
        <BlogItemStyledAdditionalInfoItem>
          Fashion
        </BlogItemStyledAdditionalInfoItem>
        <BlogItemStyledAdditionalInfoDivider />
        <BlogItemStyledAdditionalInfoItem>
          August 24, 2020
        </BlogItemStyledAdditionalInfoItem>
        <BlogItemStyledAdditionalInfoDivider />
        <BlogItemStyledAdditionalInfoItem>
          <FaRegComment />
          No comments
        </BlogItemStyledAdditionalInfoItem>
      </BlogItemStyledAdditionalInfo>
      <BlogItemStyledShortDescription>
        Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus.
        Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis
        convallis...
      </BlogItemStyledShortDescription>
    </BlogItemStyled>
  );
};

export default BlogItem;
