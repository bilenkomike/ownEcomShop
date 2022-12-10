import Button from "components/Button/Button";
import Input from "components/Input/Input";
import TextArea from "components/TextArea/TextArea";
import React from "react";
import {
  ReviewModalStyled,
  ReviewModalStyledContent,
  ReviewModalStyledTitle,
  ReviewModalStyledCloseButton,
} from "./ReviewModal.styled";

import { TfiClose } from "react-icons/tfi";
import InputFiles from "components/InputFile/InputFiles";

const ReviewModal: React.FC<{ onOpenReview: () => void }> = ({
  onOpenReview,
}) => {
  const options = [];
  for (let i = 1; i <= 5; i++) {
    options.push({ label: String(i), value: String(i) });
  }
  return (
    <ReviewModalStyled onClick={onOpenReview}>
      <ReviewModalStyledContent onClick={(e) => e.stopPropagation()}>
        <ReviewModalStyledCloseButton
          id="close-login"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onOpenReview();
          }}
        >
          <TfiClose />
        </ReviewModalStyledCloseButton>
        <ReviewModalStyledTitle>Leave a review</ReviewModalStyledTitle>
        <Input
          name="review-name"
          placeholder="Enter name"
          label="Name"
          type="text"
          variant="default"
          onChange={(e) => console.log(e)}
        />
        <Input
          name="review-email"
          placeholder="Enter your working email"
          label="Email"
          type="email"
          variant="default"
          onChange={(e) => console.log(e)}
        />
        <Input
          name="rating-select-review"
          variant="default"
          icon="select"
          type="select"
          options={options}
          onChange={(e) => console.log(e)}
          label="Rating"
          placeholder="Choose rating"
        />
        <InputFiles />
        <TextArea label="Review" placeholder="Your working email" />
        <Button
          type="submit"
          variant="solid"
          size="default"
          styleType="default"
        >
          Submit a review
        </Button>
      </ReviewModalStyledContent>
    </ReviewModalStyled>
  );
};

export default ReviewModal;
