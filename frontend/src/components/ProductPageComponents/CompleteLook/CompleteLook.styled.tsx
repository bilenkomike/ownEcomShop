import styled from "styled-components";
import Colors from "../../../constants/ui/colors/Colors";

export const CompleteLookStyled = styled.section`
  display: block;
  padding: 80px 17.9%;
  /* margin-bottom: 100px; */
`;

export const CompleteLookStyledContainer = styled.div`
  display: block;
  width: 100%;
  overflow-x: hidden;
`;

export const CompleteLookStyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CompleteLookStyledItem = styled.div`
  display: flex;
`;

export const CompleteLookStyledMainImage = styled.img`
  display: block;
  max-width: 455px;
  width: 100%;
`;

export const CompleteLookStyledList = styled.div`
  display: flex;
  & > div {
    margin-right: 0px;
  }
`;

export const CompleteLookStyledListPagination = styled.div`
  display: flex;
  margin-left: 30px;
  /* justify-content: center; */
`;

export const CompleteLookStyledListPaginationItem = styled.div<{
  active?: boolean;
}>`
  display: block;
  width: 30px;
  margin-left: 12px;

  border: 1px solid
    ${(props) => (props.active ? Colors.gray800 : Colors.gray500)};

  transition: border 0.2s linear;
`;
