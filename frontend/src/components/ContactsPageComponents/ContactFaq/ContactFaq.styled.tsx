import Colors from "constants/ui/colors/Colors";
import styled, { css } from "styled-components";

export const ContactStyledFaq = styled.div`
  display: block;
  width: 70%;
`;

export const ContactStyledFaqItem = styled.div`
  display: block;
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid ${Colors.gray300};
`;

export const ContactStyledFaqItemHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ContactStyledFaqQuestion = styled.h3`
  padding: 0;
  margin: 0;

  font-weight: 700;
  font-size: 20px;
  color: ${Colors.gray900};
`;

export const ContactStyledFaqAnswer = styled.p<{ active: boolean }>`
  display: block;
  margin: 10px 0 0;
  width: 100%;
  padding: 0;
  opacity: 0;
  visibility: hidden;

  height: 0px;
  max-height: 104px;

  font-size: 0;
  color: ${Colors.gray700};

  ${(props) =>
    props.active &&
    css`
      height: 100%;
      opacity: 1;
      visibility: visible;
      padding: 0;
      font-size: 16px;
    `}
  transition: all 0.2s ease;
`;

export const ContactStyledFaqOpenIcon = styled.span<{ active: boolean }>`
  & > svg {
    width: 20px;
    height: 20px;
  }
  color: ${Colors.primary};

  ${(props) =>
    props.active &&
    css`
      transform: rotate(180deg);
      margn-top: -10px;
    `}

  transition: all .2s ease;
`;
