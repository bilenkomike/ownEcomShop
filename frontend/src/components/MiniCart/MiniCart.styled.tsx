import styled, { css } from "styled-components";
import Colors from "../../constants/ui/colors/Colors";
import HexToRGBA from "../../constants/ui/colors/colorsHelpers/HexToRGBA";

export const MiniCartStyled = styled.div<{ active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;

  height: 100vh;
  width: 100vw;

  visibility: hidden;
  opacity: 0;

  transition: all 0.2s linear;

  ${(props) =>
    props.active &&
    css`
      visibility: visible;
      opacity: 1;
    `}

  background-color: ${HexToRGBA(Colors.gray900, 0.75)};
`;

export const MiniCartStyledInnerContent = styled.div`
  position: relative;
`;

export const MiniCartStyledInnerColumn = styled.div`
  position: relative;
  height: 100vh;
  /* flex: 1;
  flex-direction: column;
  align-items: flex-start; */
`;

export const MiniCartStyledContent = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;

  display: block;
  height: 100vh;

  max-width: 352px;
  width: 100%;
  padding: 32px 0;

  background-color: ${Colors.white};

  transform: translateX(100%);
  ${(props) =>
    props.active &&
    css`
      transform: translateX(0);
    `}

  transition: all .2s linear;
`;

export const MiniCartStyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px 32px;

  color: ${Colors.gray900};
  font-size: 26px;
  font-weight: 700;
  border-bottom: 1px solid ${Colors.gray300};

  & > svg {
    color: ${Colors.gray700};
    width: 24px;
    height: 24px;

    cursor: pointer;

    &:hover {
      margin-top: -2px;
      transform: rotate(90deg);
    }

    transition: all 0.2s linear;
  }
`;

export const MiniCartStyledList = styled.ul`
  min-height: 80vh;
  height: 100%;
`;

export const MiniCartStyledListInner = styled.ul`
  max-height: 550px;
  height: 100%;
  overflow: scroll;
`;

export const MiniCartStyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 24px;

  border-bottom: 1px solid ${Colors.gray300};

  &:last-child {
    border: none;
  }
`;

export const MiniCartStyledListItemImage = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  margin-right: 16px;

  border-radius: 4px;
`;

export const MiniCartStyledListItemContent = styled.div`
  display: block;
`;

export const MiniCartStyledListItemTitle = styled.h3`
  padding: 0;
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  color: ${Colors.gray900};
`;

export const MiniCartStyledListItemAttributes = styled.ul``;

export const MiniCartStyledListItemAttributesItem = styled.li`
  font-weight: 400;
  font-size: 12px;
  color: ${Colors.gray700};
  & > span {
    color: ${Colors.gray800};
  }
`;

export const MiniCartStyledListPriceBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div > input {
    width: 72px;
    height: 36px;
  }
`;

export const MiniCartStyledPrice = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const MiniCartStyledPriceText = styled.span<{ sale?: boolean }>`
  font-weight: 700;
  font-size: 16px;

  color: ${Colors.gray900};
  ${(props) =>
    props.sale &&
    css`
      color: ${Colors.danger};
    `}
`;

export const MiniCartStyledPriceSaleFrom = styled.span`
  font-size: 12px;
  color: ${Colors.gray700};
  font-weight: 400;
  text-decoration: line-through;
`;

export const MiniCartStyledListItemRemoveButton = styled.button`
  width: 16px;
  height: 16px;
  padding: 0px 12px;
  color: ${Colors.gray700};
`;

export const MiniCartStyledListItemWishList = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px 0px 0px;
  font-weight: 700;
  font-size: 12px;
  color: ${Colors.gray800};

  & > svg {
    width: 16px;
    height: 16px;
    margin-left: 10px;

    ${(props) =>
      props.active &&
      css`
        color: ${Colors.primary};
      `}
  }
`;

export const MiniCartStyledTotal = styled.div`
  position: absolute;
  width: calc(100% - 52px);
  bottom: 32px;
  display: block;
  padding: 32px 26px;

  border-top: 1px solid ${Colors.gray300};

  & > button {
    width: 100%;
  }
`;

export const MiniCartStyledTotalText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  font-weight: 400;
  font-size: 16px;
  color: ${Colors.gray700};

  & > span {
    font-weight: 700;
    font-size: 20px;
    color: ${Colors.gray900};
  }
`;
