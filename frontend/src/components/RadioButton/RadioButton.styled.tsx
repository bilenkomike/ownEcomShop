import Colors from "constants/ui/colors/Colors";
import HexToRGBA from "constants/ui/colors/colorsHelpers/HexToRGBA";
import styled, { css } from "styled-components";

export const RadioButtonStyledLabel = styled.label<{ disabled?: boolean }>`
  margin-left: 8px;

  font-weight: 400;
  font-size: 16px;
  color: ${Colors.gray800};

  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}
`;

export const RadioButtonStyled = styled.div`
  display: flex;
  & > input {
    -webkit-appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    margin: 0;
    width: 16px;
    height: 16px;

    border: 1px solid ${Colors.gray500};
    border-radius: 50%;

    cursor: pointer;

    transition: all 0.1s ease;

    ::after {
      content: "";
      display: flex;
      align-items: center;
      justify-content: center;
      width: 8px;
      height: 8px;

      border-radius: 50%;

      transition: all 0.1s ease;
    }

    :disabled {
      background-color: ${Colors.gray200};
      border: 1px solid ${Colors.gray400};
    }

    &:not(:disabled) {
      &:hover {
        ${RadioButtonStyledLabel} {
          cursor: pointer;
        }
        border: 2px solid ${Colors.primary};
        ::after {
          box-shadow: 0px 0px 10px 10px ${HexToRGBA(Colors.primary, 0.06)};
        }
      }
      :focus {
        border: 2px solid ${Colors.primary};
      }
      :checked {
        border: 1px solid ${Colors.primary};
        ::after {
          background-color: ${Colors.primary};
        }
        :hover {
          border: 2px solid ${Colors.primary};
          ::after {
            background-color: ${Colors.primary};
          }
        }
      }
    }
  }
`;
