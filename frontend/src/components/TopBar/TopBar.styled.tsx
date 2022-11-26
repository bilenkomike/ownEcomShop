import styled from "styled-components";

import Colors from "../../constants/ui/colors/Colors";

export const TopBarStyled = styled.nav`
  display: flex;
  padding: 11px 17.9%;
  align-items: center;
  justify-content: space-between;

  background-color: ${Colors.gray900};

  font-size: 14px;

  & > a {
    text-align: center;
    justify-content: space-between;

    color: ${Colors.gray600};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const TopBarStyledPositioned = styled.div<{ centered?: boolean }>`
  flex: ${(props) => (props.centered ? 2 : 1)};
  text-align: center;
  color: ${Colors.gray600};
  & > a,
  & > span {
    flex: 1;

    justify-content: space-between;
    margin: 0 10px;

    color: ${Colors.gray600};
    text-decoration: none;

    cursor: pointer;

    &:first-child {
      justify-content: start;
      margin-left: 0;
    }

    &:last-child {
      justify-content: end;
      margin-right: 0;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;
