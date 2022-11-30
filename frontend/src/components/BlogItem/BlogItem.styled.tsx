import styled from "styled-components";
import Colors from "../../constants/ui/colors/Colors";

export const BlogItemStyledImage = styled.img`
  display: block;
  width: 100%;
`;

export const BlogItemStyledTitle = styled.h3`
  padding: 24px 24px 12px;
  margin: 0;

  font-weight: 700;
  font-size: 20px;

  transition: all 0.1s linear;
`;

export const BlogItemStyledAdditionalInfo = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  font-size: 14px;
  color: ${Colors.gray700};

  padding: 0 24px;
`;
export const BlogItemStyledAdditionalInfoItem = styled.div`
  & > svg {
    width: 16px;
    height: 16px;
  }
`;
export const BlogItemStyledAdditionalInfoDivider = styled.div`
  display: block;
  width: 1px;
  height: 12px;

  background-color: ${Colors.gray700};
  border-radius: 1px;
`;
export const BlogItemStyledShortDescription = styled.p`
  padding: 0 24px;
  margin: 0;

  font-weight: 400;
  font-size: 16px;
  color: ${Colors.gray800};
  line-height: 1.4;
`;

export const BlogItemStyled = styled.article`
  display: block;
  max-width: 600px;
  width: 100%;
  padding-bottom: 21px;

  border-radius: 4px;

  background-color: ${Colors.white};
  box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08),
    0px 30px 24px -10px rgba(154, 156, 165, 0.05),
    0px 12px 10px -6px rgba(154, 156, 165, 0.04),
    0px 4px 4px -4px rgba(30, 33, 44, 0.03);

  overflow: hidden;

  cursor: pointer;

  transition: all 0.1s linear;

  &:hover ${BlogItemStyledTitle} {
    color: ${Colors.primary};
  }

  &:hover {
    box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.16),
      0px 30px 24px -10px rgba(154, 156, 165, 0.1),
      0px 12px 10px -6px rgba(154, 156, 165, 0.08),
      0px 4px 4px -4px rgba(30, 33, 44, 0.05);
  }
`;
