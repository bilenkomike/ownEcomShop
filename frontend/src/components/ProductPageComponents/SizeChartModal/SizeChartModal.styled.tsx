import Colors from "constants/ui/colors/Colors";
import HexToRGBA from "constants/ui/colors/colorsHelpers/HexToRGBA";
import styled, { css } from "styled-components";

export const SizeChartModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background-color: ${HexToRGBA(Colors.gray900, 0.75)};
`;

export const SizeChartModalStyledContent = styled.div`
  position: relative;

  display: block;
  padding: 48px;

  background-color: ${Colors.white};

  border: 1px solid ${Colors.gray300};
  /* shadow/large */

  box-shadow: 0px 60px 80px -20px rgba(30, 33, 44, 0.16),
    0px 26px 24px -10px rgba(30, 33, 44, 0.1),
    0px 12px 10px -6px rgba(30, 33, 44, 0.08),
    0px 4px 4px -4px rgba(30, 33, 44, 0.05);
  border-radius: 4px;

  & > #close-login {
    margin-top: 0;
    width: auto;
  }

  & > div {
    margin-bottom: 24px;
  }

  & > p {
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    font-size: 16px;
    color: ${Colors.gray900};

    & > div {
      margin-left: 10px;
    }
  }

  & > div > table {
    border-spacing: 0;

    & > tbody {
      & > tr {
        & > td:first-child {
        }
        & > td {
          padding: 16px;
          /* width: 60px; */
          border: none;
          /* padding: 0; */
        }
      }
      & > tr:nth-child(odd) {
        background-color: ${Colors.gray300};
      }
    }
  }
`;

export const SizeChartModalStyledCloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;

  display: block;
  & > svg {
    width: 24px;
    height: 24px;
  }
  color: ${Colors.gray700};

  &:hover {
    transform: rotate(180deg);
  }

  transition: all 0.2s linear;
`;

export const SizeChartModalStyledTitle = styled.h3`
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  color: ${Colors.gray900};
`;

export const SizeChartModalStyledTable = styled.div`
  border: 1px solid ${Colors.gray300};
  & > h2 {
    width: 100%;
    text-align: center;
    color: ${Colors.gray900};
    font-weight: 700;
    font-size: 18px;
  }
`;

export const SizeChartStyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SizeChartStyledPaginationItem = styled.button<{
  active?: boolean;
}>`
  display: block;
  padding: 10px 20px;
  margin-right: 12px;
  &:last-child {
    margin-right: 0;
  }

  border-radius: 4px;
  border: 1px solid transparent;

  font-weight: 700;
  font-size: 16px;
  color: ${Colors.gray600};

  ${(props) =>
    props.active &&
    css`
      border: 1px solid ${Colors.primary};
      color: ${Colors.primary};
    `}
`;
