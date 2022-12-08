import { PaginationStyled } from "components/Pagination/Pagination.styled";
import Colors from "constants/ui/colors/Colors";
import styled, { css } from "styled-components";

const colors = [
  Colors.success,
  Colors.lime,
  Colors.yellow,
  Colors.warning,
  Colors.danger,
];

export const ProductReviewsStyled = styled.section`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export const ProductReviewsStyledCommentBlock = styled.div`
  display: block;
  width: 60%;

  & > div {
    margin-bottom: 20px;
  }

  ${PaginationStyled} {
    justify-content: center;
  }
`;

export const ProductReviewsStyledStatistic = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductReviewsStyledStatisticsGeneral = styled.div`
  width: 35%;
  & > h2 {
    font-weight: 900;
    font-size: 32px;
    color: ${Colors.gray900};
    margin: 0 0 20px;
  }
  & > p {
    font-weight: 400;
    font-size: 14px;
    color: ${Colors.gray700};
  }
`;

export const ProductReviewsStyledStatisticsBars = styled.div<{
  percents: number[];
}>`
  width: 60%;
  font-weight: 400;
  font-size: 14px;
  color: ${Colors.gray700};
  margin-bottom: 4px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > div > span {
    position: relative;

    display: block;
    max-width: 356px;
    width: 100%;
    height: 4px;
    margin: 0 3px;

    border-radius: 20px;
    background-color: ${Colors.gray300};

    & > span {
      position: absolute;
      top: 0;
      left: 0;
      height: 4px;

      border-radius: 20px;

      width: 100%;
    }
  }

  ${(props) =>
    props.percents.map(
      (percent: number, id: number) => css`
        & > div:nth-child(${id + 1}) > span > span {
          max-width: ${(percent * 100) /
          props.percents.reduce((a: number, b: number) => a + b, 0)}%;
          background-color: ${colors[id]};
        }
      `
    )}
`;
