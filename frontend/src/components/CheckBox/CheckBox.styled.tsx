import styled from "styled-components";

import Colors from "../../constants/ui/colors/Colors";

export const CheckboxStyledField = styled.div`
  display: flex;
  user-select: none;
  cursor: pointer;

  color: ${Colors.gray800};
  font-weight: 400;
  font-size: 14px;
`;
export const CheckboxStyled = styled.div<{ active?: boolean }>`
  position: relative;

  display: block;
  width: 16px;
  height: 16px;
  margin-right: 5px;

  background: ${Colors.white};

  border: 1px solid ${Colors.gray500};
  border-radius: 3px;

  font-weight: 400;
  font-size: 16px;
  color: ${Colors.gray800};

  & > span {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    display: ${(props) => (props.active ? "flex" : "none")};
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    background-color: ${Colors.primary};
    color: ${Colors.white};
  }

  transition: all 0.1s linear;
`;
