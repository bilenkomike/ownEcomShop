import Colors from "constants/ui/colors/Colors";
import styled from "styled-components";

export const ContactStyledForm = styled.form`
  width: 80%;
  & > button {
    margin: 40px 0 60px;
  }
`;

export const ContactStyledHeader = styled.h4`
  display: block;
  padding: 0;
  margin: 35px 0;

  font-weight: 700;
  font-size: 20px;
  color: ${Colors.gray900};
`;

export const ContactStyledFormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  & > div {
    margin-bottom: 20px;
  }
`;
