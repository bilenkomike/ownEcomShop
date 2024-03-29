import styled from "styled-components";
import Colors from "../../constants/ui/colors/Colors";
import HexToRGBA from "../../constants/ui/colors/colorsHelpers/HexToRGBA";

export const FooterStyled = styled.footer`
  padding: 60px 0 0;
  background-color: ${Colors.gray900};
`;

export const FooterStyledContent = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0px 17.9% 32px;
  align-items: center;

  color: ${Colors.white};

  border-bottom: 1px solid ${HexToRGBA(Colors.white, 0.5)};
  &:first-child {
    align-items: flex-start;
  }

  &:last-child {
    padding-top: 32px;
    border: none;

    font-weight: 700;
    opacity: 0.6;
    & > span {
      opacity: 1;
    }
  }
`;

export const FooterStyledCopyRight = styled.span`
  & > svg {
    color: ${Colors.primary};
  }
`;

export const FooterStyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 180px;

  gap: 8px;
  margin-right: 30px;
  font-size: 14px;

  &:last-child {
    margin-right: 0;
  }
`;
export const FooterStyledListItem = styled.div`
  display: flex;
  opacity: 0.6;
  justify-content: space-between;
  font-size: 14px;

  & > strong {
    opacity: 1;
    color: ${Colors.white};
  }

  & > button {
    margin-right: 5px;
  }
`;

export const FooterStyledListTitle = styled.h3`
  padding: 0;
  margin: 0;

  font-weight: 700;
  text-transform: uppercase;
`;
