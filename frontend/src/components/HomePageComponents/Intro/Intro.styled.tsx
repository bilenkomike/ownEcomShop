import styled, { css } from "styled-components";
import Colors from "../../../constants/ui/colors/Colors";

export const IntroStyled = styled.section`
  display: block;
  width: 100%;
  position: relative;
`;

export const IntorStyledItem = styled.div`
  position: relative;
`;

export const IntroStyledItemImage = styled.img`
  display: block;
  width: 100%;
  height: 700px;
`;
export const IntroStyledItemSection = styled.div`
  top: 0;
  position: absolute;
  padding: 140px 17.9% 180px;
`;

export const IntroStyledItemSubtitle = styled.h5`
  text-transform: uppercase;
  color: ${Colors.gray900};
  font-size: 18px;
  font-weight: 700;
`;

export const IntroStyledItemTitle = styled.h5`
  color: ${Colors.gray900};
  font-size: 72px;
  font-weight: 900;
  margin: 12px 0;
`;

export const IntroStyledItemButtonList = styled.div`
  display: flex;
  width: 100%;

  margin: 60px 0 200px;
  & > button {
    margin-right: 24px;
  }
`;

export const IntroStyledSelect = styled.div`
  position: absolute;
  bottom: 180px;
  left: 17.9%;
  display: flex;
`;

export const IntroStyledSelectItem = styled.div<{ active?: boolean }>`
  width: 158px;
  margin-right: 4px;
  padding-bottom: 12px;

  color: ${Colors.gray800};
  font-size: 28px;

  border-bottom: 2px solid ${Colors.gray800};

  opacity: 0.6;
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      opacity: 1;
    `}
`;
