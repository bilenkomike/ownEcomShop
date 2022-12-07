import styled from "styled-components";
import Colors from "../../constants/ui/colors/Colors";

export const PaymentButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 64px;
  /* padding: 21px; */
  border-radius: 4px;
  border: 1px solid ${Colors.gray400};
  background-color: ${Colors.gray200};

  margin-right: 24px;
`;
