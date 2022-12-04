import styled from "styled-components";
import Colors from "../../constants/ui/colors/Colors";

export const BreadCrumbsStyled = styled.div`
  display: flex;
  padding: 16px 0px;
  align-items: center;

  background-color: ${Colors.gray200};

  & > div {
    display: flex;
  }

  & > div > div {
    display: flex;
    width: 16px;
    height: 16px;
    color: ${Colors.gray600};
  }

  & > div > span {
    text-transform: capitalize;
    color: ${Colors.gray600};
    &:first-child {
      color: ${Colors.gray800};
    }
  }
`;
