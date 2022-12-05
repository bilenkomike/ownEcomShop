import styled, { css } from "styled-components";
import Colors from "../../constants/ui/colors/Colors";

export const SubscribeStyled = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 65px 17.9%;
  background-color: ${Colors.gray200};
`;

export const SubscribeStyledImg = styled.img`
  display: block;
  width: 416px;
`;

export const SubscribeStyledContent = styled.div`
  max-width: 555px;
  padding: 35px 0;
`;

export const SubscribeStyledContentSubTitle = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: ${Colors.gray700};
`;

export const SubscribeStyledContentSelectType = styled.div`
  display: flex;
  max-width: 310px;
  justify-content: space-between;
  padding: 32px 0;
`;

export const SubscribeStyledContentSelectTypeItem = styled.div<{
  active?: boolean;
}>`
  padding: 5px 16px;

  border-radius: 4px;
  border: 1px solid ${Colors.gray400};

  font-weight: 700;
  font-size: 14px;
  color: ${Colors.gray700};

  &:hover {
    background-color: ${Colors.primary600};
    color: ${Colors.white};
  }

  ${(props) =>
    props.active &&
    css`
      color: ${Colors.white};
      background-color: ${Colors.primary};
    `};

  cursor: pointer;

  transition: all 0.1s linear;
`;

export const SubscribeStyledSubscribeForm = styled.form`
  display: flex;
  align-items: flex-end;

  margin-bottom: 20px;

  & > div {
    width: 50%;
    position: static;
  }

  & > button {
    border-radius: 0px 4px 4px 0px;
  }
`;
