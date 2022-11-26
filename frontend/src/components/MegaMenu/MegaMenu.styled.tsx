import styled from "styled-components";
import Colors from "../../constants/ui/colors/Colors";

export const MegaMenuStyled = styled.div<{ active?: boolean }>`
  display: ${(props) => (props.active ? "flex" : "none")};
  width: 100%;
  padding: 31px 17.9%;

  box-sizing: border-box;
  position: absolute;

  background-color: ${Colors.white};
`;

export const MegaMenuList = styled.div`
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
export const MegaMenuListItem = styled.div`
  font-size: 14px;
`;

export const MegaMenuLine = styled.div`
  display: block;
  width: 1px;
  height: 427px;
  margin: 0px 67px;

  background: linear-gradient(
    rgba(221, 218, 220, 0),
    rgba(218, 219, 221, 0.5),
    rgba(218, 219, 221, 1),
    rgba(218, 219, 221, 0.5),
    rgba(218, 219, 221, 0)
  );
`;

export const MegaMenuListTitle = styled.h3`
  padding: 0;
  margin: 0;

  font-weight: 700;
  text-transform: uppercase;
`;
export const MegaMenuBanner = styled.div``;

export const MegaMenuBannerText = styled.p`
  font-weight: 700;
  font-size: 14px;
`;
