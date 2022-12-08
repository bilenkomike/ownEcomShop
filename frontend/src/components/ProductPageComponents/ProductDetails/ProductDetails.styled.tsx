import styled from "styled-components";
import Colors from "../../../constants/ui/colors/Colors";

export const ProductDetailsStyled = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ProductDetailsStyledContent = styled.div`
  width: 60%;
  & > h3 {
    font-weight: 700;
    font-size: 20px;
    color: ${Colors.gray900};
  }
  & > p {
    font-weight: 400;
    font-size: 16px;
    color: ${Colors.gray800};
  }
`;

export const ProductDetailsStyledList = styled.ul`
  & > li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 4px;

    font-weight: 400;
    font-size: 16px;
    color: ${Colors.gray800};
    & > img {
      margin-right: 10px;
    }
  }
  & > li::before {
    content: "";
    display: block;
    width: 4px;
    height: 4px;
    margin-top: 7px;
    margin-right: 10px;

    border-radius: 50%;
    background-color: ${Colors.primary};
  }

  &:last-child {
    & > li::before {
      display: none;
    }
  }
`;
