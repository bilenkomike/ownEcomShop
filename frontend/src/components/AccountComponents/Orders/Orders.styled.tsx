import Colors from "constants/ui/colors/Colors";
import styled, { css } from "styled-components";

export const OrdersStyled = styled.section``;

export const OrdersStyledHeaderItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 16px;
  color: ${Colors.gray800};

  & > div {
    margin-left: 10px;
    width: 170px;

    & > input {
      width: 170px;
    }
  }
`;

export const OrdersStyledList = styled.ul`
  display: block;
  margin: 48px 0 60px;
`;

export const OrdersStyledListItem = styled.li`
  display: block;
  padding: 24px 0;
  &:first-child {
    padding-top: 0;
  }

  border-bottom: 1px solid ${Colors.gray300};
`;

export const OrdersStyledListItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 400;
  font-size: 16px;

  & > time {
    display: flex;
    align-items: center;

    font-weight: 400;
    font-size: 14px;
    color: ${Colors.gray700};

    & > svg {
      width: 15px;
      height: 15px;

      margin-right: 9px;
    }
  }

  & > span:last-child {
    color: ${Colors.gray900};
  }
`;

export const OrdersStyledListItemContent = styled.div``;

export const OrdersStyledListItemHeaderId = styled.span<{ active: boolean }>`
  color: ${Colors.gray900};
  ${(props) =>
    props.active &&
    css`
      color: ${Colors.primary};
    `}
  transition: all .2s linear;
`;

export const OrdersStyledListItemHeaderStatus = styled.div<{
  status: "canceled" | "inProgress" | "delivered";
}>`
  display: block;
  padding: 4.5px 8px;

  ${(props) => {
    switch (props.status) {
      case "canceled":
        return css`
          background-color: ${Colors.danger};
        `;
      case "inProgress":
        return css`
          background-color: ${Colors.info};
        `;
      case "delivered":
        return css`
          background-color: ${Colors.success};
        `;
    }
  }}
  border-radius: 4px;

  color: ${Colors.white};
  font-weight: 400;
  font-size: 14px;
`;

export const OrdersStyledListItemHeaderButton = styled.button<{
  active: boolean;
}>`
  & > svg {
    width: 20px;
    height: 20px;
  }

  color: ${Colors.primary};

  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      margin-top: -4px;
      transform: rotate(180deg);
    `};

  transition: all 0.2s ease;
`;

export const OrdersItemsStyledList = styled.ul<{
  height: number | undefined;
  active: boolean;
}>`
  padding: 0;
  background: ${Colors.gray200};
  border-radius: 4px;
  height: 0;
  overflow: hidden;
  visibility: hidden;
  ${(props) =>
    props.active &&
    props.height &&
    css`
      margin-top: 20px;
      height: calc(${props.height * 129}px + 35px);
      padding: 20px 0px;
      visibility: visible;
    `};

  transition: all 0.2s ease;
`;

export const OrdersItemsStyledListItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 24px;

  border-bottom: 1px solid ${Colors.gray300};

  & > img {
    diplay: block;
    width: 80px;
    height: 80px;
  }

  & > div:nth-child(3) {
    width: 77px;
    & > input {
      width: 77px;
    }
  }
`;

export const OrdersItemsStyledListItemMainText = styled.div`
  display: block;
  font-weight: 700;
  font-size: 14px;
  color: ${Colors.gray900};

  & > span {
    display: block;

    margin-top: 4px;

    font-weight: 400;
    font-size: 12px;
    color: ${Colors.gray700};

    & > span {
      color: ${Colors.gray800};
    }
  }
`;

export const OrderItemsStyledListItemInfo = styled.div`
  display: block;

  font-weight: 400;
  font-size: 12px;
  color: ${Colors.gray700};

  & > span {
    display: block;
    margin-top: 3px;

    font-weight: 400;
    font-size: 14px;
    color: ${Colors.gray900};
  }
`;

export const OrderItemsStyledListTotal = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  padding-left: 24px;
  padding-right: 24px;

  & > span {
    font-weight: 400;
    font-size: 12px;
    color: ${Colors.gray700};

    & > span {
      font-weight: 400;
      font-size: 14px;
      color: ${Colors.gray900};
    }
  }
`;

export const OrdersStyledSeeTracking = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-weight: 700;
  font-size: 16px;
  color: ${Colors.gray900};

  & > button {
    margin-left: 10px;
  }

  height: 0;
  overflow: hidden;
  visibility: hidden;
  ${(props) =>
    props.active &&
    css`
      margin-top: 20px;
      height: 36px;
      padding: 20px 0px;
      visibility: visible;
    `};

  transition: all 0.2s ease;
`;

export const OrdersStyledSeeMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 16px;
  color: ${Colors.gray800};

  & > svg {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
`;
