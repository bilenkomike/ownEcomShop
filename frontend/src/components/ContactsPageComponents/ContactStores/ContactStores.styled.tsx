import Colors from "constants/ui/colors/Colors";
import styled from "styled-components";

export const ContactStyledStoresList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
`;

export const ContactStyledStoreItem = styled.div`
  display: block;
  width: 45%;
  border: 1px solid ${Colors.gray300};
  border-radius: 4px;
  overflow: hidden;
  box-sizing: border-box;
`;

export const ContactStyledStoreItemImage = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

export const ContactStyledStoreItemContent = styled.div`
  display: block;
  padding: 24px;
`;

export const ContactStyledStoreItemTitle = styled.h2`
  display: block;
  margin: 0 0 24px 0;

  font-weight: 700;
  font-size: 24px;
  color: ${Colors.gray900};
`;

export const ContactStyledStoreItemInfoItem = styled.p`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0px 0px 12px 0px;

  color: ${Colors.gray800};
  font-weight: 400;
  font-size: 16px;

  & > svg {
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 12px;
    color: ${Colors.primary};
  }
  & > a {
    color: ${Colors.primary};
    text-decoration: underline;
  }
`;
