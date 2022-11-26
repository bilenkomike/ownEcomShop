import styled from "styled-components";
import Colors from "../../constants/ui/colors/Colors";

export const MainMenuStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 31px 17.9%;

  font-size: 16px;
  font-weight: 700;
`;

export const MainMenuActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > span,
  & > a {
    margin: 0px 10px;

    font-size: 16px;
    color: inherit;
    text-decoration: none;

    cursor: pointer;

    & > svg {
      margin-right: 10px;
    }
  }
`;

export const MainMenuActionsDivider = styled.div`
  width: 2px;
  height: 22px;

  background: linear-gradient(
    rgba(221, 218, 220, 0),
    rgba(218, 219, 221, 0.5),
    rgba(218, 219, 221, 1),
    rgba(218, 219, 221, 0.5),
    rgba(218, 219, 221, 0)
  );
`;

export const MainMenuMiniCartCounter = styled.span`
  padding: 2px 8px;
  border-radius: 4px;
  color: ${Colors.white};
  background-color: ${Colors.success};
`;

export const MainMenuLinks = styled.div`
  & > a {
    margin: 0px 10px;

    text-decoration: none;
    color: ${Colors.gray800};

    transition: color 0.1s linear;

    &:hover {
      color: ${Colors.primary};
    }

    &.active {
      color: ${Colors.primary};
    }
  }
`;

export const MainMenuForm = styled.form`
  position: relative;
`;

export const MainMenuSearchButton = styled.button`
  width: 16px;
  height: 16px;

  border: none;
  border-radius: 0;
  background-color: transparent;

  position: absolute;
  top: 30%;
  right: 5%;
  z-index: 2;

  color: ${Colors.gray800};

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
