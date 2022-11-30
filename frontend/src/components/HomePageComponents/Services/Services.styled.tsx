import styled from "styled-components";
import Colors from "../../../constants/ui/colors/Colors";

export const ServicesStyled = styled.section`
  display: flex;
  padding: 120px 17.9% 180px;
  justify-content: space-between;
`;

export const ServicesStyledItem = styled.div`
  display: block;
  text-align: center;
`;

export const ServicesStyledItemImg = styled.img`
  display: block;
  margin: 0 auto 24px;
  width: 48px;
  height: 48px;
`;

export const ServicesStyledItemTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
  color: ${Colors.gray900};
`;

export const ServicesStyledItemSubtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${Colors.gray700};
`;

export const ServicesStyledDivider = styled.div`
  display: block;
  width: 2px;
  height: 136px;
  background: linear-gradient(
    rgba(221, 218, 220, 0),
    rgba(218, 219, 221, 0.5),
    rgba(218, 219, 221, 1),
    rgba(218, 219, 221, 0.5),
    rgba(218, 219, 221, 0)
  );
`;
