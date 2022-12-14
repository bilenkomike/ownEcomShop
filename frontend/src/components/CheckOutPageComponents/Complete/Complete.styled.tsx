import Colors from "constants/ui/colors/Colors";
import styled from "styled-components";

export const CompleteStyled = styled.section`
  & > button {
    width: 100%;
  }
`;

export const CompleteStyledInner = styled.div`
  margin: 24px 0;
  padding: 24px 0px;
  border-radius: 4px;
  background-color: ${Colors.gray200};

  box-sizing: border-box;
  & > * {
    box-sizing: border-box;
  }
`;

export const CompleteStyledHeader = styled.h3`
  padding: 0 24px 24px;
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  color: ${Colors.gray900};
  border-bottom: 1px solid ${Colors.gray300};
`;

export const CompleteStyledContent = styled.ul`
  padding: 24px;
  & > li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4px;

    &:last-child {
      margin-bottom: 0px;
    }

    font-weight: 400;
    font-size: 16px;
    color: ${Colors.gray800};
  }
`;

export const CompleteStyledFooter = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 0;
  margin: 0;

  font-weight: 700;
  font-size: 24px;
  color: ${Colors.gray900};

  border-top: 1px solid ${Colors.gray300};
`;
