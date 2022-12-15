import Colors from "constants/ui/colors/Colors";
import styled from "styled-components";

export const StatusOrderStyled = styled.section`
  position: relative;

  width: 55.3%;
  height: 523px;
  margin-top: 42px;
`;

export const StatusOrderStyledTable = styled.table`
  /* table-layout: fixed; */

  border-collapse: collapse;

  text-align: left;
  white-space: nowrap;
  thead {
    border-bottom: 1px solid ${Colors.gray300};

    font-weight: 700;
    font-size: 18px;
    color: ${Colors.gray900};

    & > tr > th {
      padding-bottom: 20px;
    }

    & > tr > th {
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid ${Colors.gray300};
      &:last-child {
        border: none;
      }

      color: ${Colors.gray600};

      &.active {
        color: ${Colors.gray800};
      }

      td {
        padding: 20px 0px;
        padding-right: 30px;
        font-weight: 400;
        font-size: 16px;
      }
    }
  }
`;

export const StatusOrderStyledStatusBar = styled.div`
  position: absolute;
  bottom: 31px;
  left: -40px;

  div {
    display: block;
    width: 8px;
    height: 8px;

    border-radius: 50%;
    background-color: ${Colors.gray500};
    &.active {
      background-color: ${Colors.primary};
    }
  }
  span {
    display: block;
    height: 41px;
    width: 2px;
    margin: 5px auto;

    opacity: 0.5;

    border-radius: 10px;

    background-color: ${Colors.gray500};
    &.active {
      background-color: ${Colors.primary};
    }
  }
`;
