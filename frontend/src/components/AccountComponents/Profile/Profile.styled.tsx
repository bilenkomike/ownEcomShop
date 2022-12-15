import Colors from "constants/ui/colors/Colors";
import styled from "styled-components";

export const ProfileStyled = styled.section`
  width: 100%;
`;

export const ProfileStyledHeaderItem = styled.span`
  color: ${Colors.danger};

  cursor: pointer;
  font-weight: 400;
  &:hover {
    font-weight: 700;
  }

  transition: all 0.2s ease;

  & > svg {
    margin-right: 10px;
  }
`;

export const ProfileStyledContent = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  & > div {
    display: block;
    width: 48%;
    & > div {
      width: 100%;
      margin-bottom: 20px;
      & > input {
        width: 100%;
      }
    }
  }
`;
