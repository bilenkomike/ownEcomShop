import React from "react";
import {
  ReviewModalStyled,
  ReviewModalStyledContent,
} from "./ReviewModal.styled";

const ReviewModal: React.FC<{ onOpenReview: () => void }> = ({
  onOpenReview,
}) => {
  return (
    <ReviewModalStyled onClick={onOpenReview}>
      <ReviewModalStyledContent></ReviewModalStyledContent>
    </ReviewModalStyled>
  );
};

export default ReviewModal;
