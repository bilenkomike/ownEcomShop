import styled, { css } from "styled-components";
import Colors from "../../../constants/ui/colors/Colors";

export const BannersStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  margin: 170px 0px;
`;

export const BannersStyledItem = styled.div<{ size: number }>`
  width: ${(props) => props.size * 33 - 1}vw;
  max-height: 500px;
  margin-bottom: 16px;

  position: relative;
`;

export const BannersStyledItemImage = styled.img<{ width: number }>`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;

  border-radius: 4px;
`;

export const BannersStyledItemContent = styled.div`
  position: absolute;
  top: 60px;
  left: 60px;
  z-index: 2;

  display: block;

  color: ${Colors.gray900};
`;

export const BannersStyledItemTitle = styled.h3`
  font-weight: 900;
  font-size: 32px;
  margin: 12px 0 40px;
  max-width: 362px;
  width: 100%;
`;

export const BannersStyledItemSubtitle = styled.div<{ sub?: boolean }>`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;

  max-width: 360px;
  width: 100%;

  ${(props) =>
    props.sub &&
    css`
      font-weight: 400;
      text-transform: none;
      color: ${Colors.gray800};
    `}
`;

export const BannersStyledExpirationDate = styled.div`
  margin-top: 80px;
`;

export const BannersStyledExpirationDateTime = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 209px;
  width: 100%;
  margin-top: 12px;

  text-align: center;
`;

export const BannersStyledExpirationDateTimeItem = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${Colors.gray900};
  & > div {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 4px;
  }
`;

export const BannersStyledSubscribeForm = styled.form`
  display: flex;
  align-items: flex-end;

  margin-bottom: 20px;

  & > div {
    width: 50%;
  }
  & > button {
    border-radius: 0px 4px 4px 0px;
  }
`;
