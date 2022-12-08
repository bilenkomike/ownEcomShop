import Colors from "constants/ui/colors/Colors";
import styled from "styled-components";

export const CommentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 32px;
  margin-bottom: 32px;

  border-bottom: 1px solid ${Colors.gray300};
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const CommentStyledAuthor = styled.div`
  display: block;
  width: 23%;

  & > h4 {
    font-weight: 700;
    font-size: 18px;
    color: ${Colors.gray900};
    margin: 0px 0px 8px 0px;
  }
  & > time {
    display: block;
    font-weight: 400;
    font-size: 14px;
    color: ${Colors.gray700};
    margin-bottom: 16px;
  }
`;

export const CommentStyledCommentBlock = styled.div`
  display: block;
  width: 74%;

  font-weight: 400;
  font-size: 16px;
  color: ${Colors.gray800};
  & > p {
    text-align: justify;
    margin-top: 0;
    & > i {
      cursor: pointer;
      font-weight: 700;
      color: ${Colors.primary};
      font-style: normal;
    }
  }
`;

export const CommentStyledCommentActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 400;
  font-size: 14px;
  color: ${Colors.gray700};
  & > span {
    cursor: pointer;

    &:last-child > i {
      font-style: normal;
      &:first-child {
        margin-right: 16px;
      }

      &:first-child > svg {
        color: ${Colors.success};
      }

      &:last-child > svg {
        color: ${Colors.danger};
      }
    }
  }
`;
