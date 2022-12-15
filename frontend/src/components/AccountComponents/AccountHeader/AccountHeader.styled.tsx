import Colors from "constants/ui/colors/Colors";
import styled from "styled-components";

export const AccountHeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const AccountHeaderStyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 900;
  font-size: 32px;
  color: ${Colors.gray900};
`;
