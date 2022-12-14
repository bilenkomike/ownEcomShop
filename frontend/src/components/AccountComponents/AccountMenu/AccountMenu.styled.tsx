import Colors from "constants/ui/colors/Colors";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const AccountMenuStyled = styled.nav`
  display: block;
  width: 285px;
  margin-top: 40px;

  border: 1px solid ${Colors.gray300};
  box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08),
    0px 30px 24px -10px rgba(154, 156, 165, 0.05),
    0px 12px 10px -6px rgba(154, 156, 165, 0.04),
    0px 4px 4px -4px rgba(30, 33, 44, 0.03);
  border-radius: 4px;
`;

export const AccountMenuStyledHeader = styled.div`
  padding: 20px;
  & > h3 {
    margin: 0;
    padding: 0;

    font-weight: 700;
    font-size: 20px;
    color: ${Colors.gray800};
  }

  & > p {
    margin: 0;
    padding: 0;

    font-weight: 400;
    font-size: 16px;
    color: ${Colors.gray700};
  }
`;

export const AccountMenuStyledList = styled.div`
  width: 100%;
`;

export const AccountMenuStyledListItem = styled(NavLink)<{ active: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 20px;

  box-sizing: border-box;

  border-top: 1px solid ${Colors.gray300};

  font-weight: 400;
  font-size: 16px;
  color: ${Colors.gray800};

  ${(props) =>
    props.active &&
    css`
      background-color: ${Colors.primary};
      color: ${Colors.white};
    `}

  & > span {
  }
`;
