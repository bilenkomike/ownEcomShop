import styled, { css } from "styled-components";

export const ProductsListStyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductsListStyled = styled.div<{ activeSort?: boolean }>`
  display: grid;
  justify-items: center;
  margin: 32px 0px;
  width: 100%;
  ${(props) =>
    props.activeSort
      ? css`
          grid-template-columns: 1fr 1fr 1fr;
        `
      : css`
          grid-template-columns: 1fr 1fr 1fr 1fr;
        `}

  gap: 30px;
`;
