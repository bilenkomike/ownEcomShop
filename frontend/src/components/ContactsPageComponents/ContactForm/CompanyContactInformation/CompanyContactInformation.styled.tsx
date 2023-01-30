import Colors from "constants/ui/colors/Colors";
import styled from "styled-components";

export const CompanyContactStyled = styled.div``;

export const CompanyContactStyledHeader = styled.h4`
  display: block;
  padding: 0;
  margin: 0 0 20px 0;

  font-weight: 700;
  font-size: 20px;
  color: ${Colors.gray900};
`;

export const CompanyContactStyledItem = styled.a`
  & > svg {
    padding-right: 12px;
    width: 20px;
    height: 20px;
    color: ${Colors.primary};
  }

  display: flex;
  align-items: center;

  margin-bottom: 15px;

  font-weight: 400;
  font-size: 16px;
  color: ${Colors.gray800};

  &:hover {
    text-decoration: underline;
  }
`;
