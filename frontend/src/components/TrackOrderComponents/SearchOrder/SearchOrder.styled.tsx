import Colors from "constants/ui/colors/Colors";
import styled from "styled-components";

export const SearchOrderStyled = styled.section`
  display: block;
  width: 31.7%;

  margin-bottom: 180px;

  & > h2 {
    font-size: 32px;
  }

  & > p {
    font-weight: 400;
    font-size: 18px;
    color: ${Colors.gray700};

    word-spacing: 2px;
  }

  & > form {
    position: relative;

    display: block;
    width: 100%;

    & > div {
      width: 100%;
      margin-top: 32px;
      & > input {
        width: 100%;
      }
    }

    & > button {
      position: absolute;
      bottom: 0;
      right: 0;

      height: 47px;
      padding: 18px 35px;

      border-radius: 0px 4px 4px 0;
    }
  }
`;

export const SearchOrderStyledInfo = styled.div`
  padding: 24px;
  margin-top: 48px;
  margin-bottom: 40px;

  box-sizing: border-box;

  border: 1px solid ${Colors.gray300};
  box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08),
    0px 30px 24px -10px rgba(154, 156, 165, 0.05),
    0px 12px 10px -6px rgba(154, 156, 165, 0.04),
    0px 4px 4px -4px rgba(30, 33, 44, 0.03);
  border-radius: 4px;

  & > span {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 8px;

    font-weight: 400;
    font-size: 16px;
    color: ${Colors.gray700};

    & > span:first-child {
      font-weight: 700;
      font-size: 16px;
      color: ${Colors.gray800};
    }
  }
`;
