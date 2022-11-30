import { Variant, StyleType, Size } from "../types/Button.styled.types";
import Colors from "../../../constants/ui/colors/Colors";
import HexToRGBA from "../../../constants/ui/colors/colorsHelpers/HexToRGBA";

export const backGroundColor = (
  variant: Variant,
  styleType: StyleType,
  size: Size
) => {
  if (size !== "social") {
    switch (styleType) {
      case "default":
        return variant === "solid" ? Colors.primary : "transparent";
      case "secondary":
        return variant === "solid" ? Colors.gray300 : "transparent";
      case "dark":
        return variant === "solid" ? Colors.gray800 : "transparent";
      case "light":
        return variant === "solid" ? Colors.white : "transparent";
    }
  } else {
    switch (styleType) {
      case "default":
        return variant === "solid"
          ? HexToRGBA(Colors.gray700, 0.12)
          : "transparent";
      case "light":
        return variant === "solid"
          ? HexToRGBA(Colors.white, 0.12)
          : "transparent";
    }
  }
};

export const borderColor = (
  variant: Variant,
  styleType: StyleType,
  size?: Size
) => {
  if (size !== "social") {
    switch (styleType) {
      case "default":
        return `1px solid ${Colors.primary}`;
      case "secondary":
        return `1px solid ${Colors.gray400}`;
      case "dark":
        return `1px solid ${Colors.gray800}`;
      case "light":
        return `1px solid ${Colors.white}`;
    }
  } else {
    return variant === "solid" ? "none" : `1px solid ${Colors.gray400}`;
  }
};

export const color = (variant: Variant, styleType: StyleType, size: Size) => {
  if (size !== "social") {
    switch (styleType) {
      case "default":
        return variant === "solid" ? Colors.white : Colors.primary;
      case "secondary":
        return Colors.gray800;
      case "dark":
        return variant === "solid" ? Colors.white : Colors.gray800;
      case "light":
        return variant === "solid" ? Colors.gray800 : Colors.white;
    }
  } else {
    switch (styleType) {
      case "default":
        return Colors.gray700;
      case "light":
        return variant === "solid"
          ? Colors.white
          : HexToRGBA(Colors.white, 0.7);
    }
  }
};

export const hover = (variant: Variant, styleType: StyleType, size: Size) => {
  if (size !== "social") {
    switch (styleType) {
      case "default":
        return {
          backgroundColor:
            variant === "solid" ? Colors.primary600 : Colors.primary,
          color: Colors.white,
        };
      case "secondary":
        return {
          backgroundColor: Colors.gray400,
          color: Colors.gray800,
        };
      case "dark":
        return {
          backgroundColor: Colors.gray900,
          color: Colors.white,
        };
      case "light":
        return {
          backgroundColor: Colors.white,
          color: Colors.gray900,
        };
    }
  } else {
    switch (styleType) {
      case "default":
        if (variant === "outlined") {
          return {
            border: `1px solid ${Colors.primary}`,
            color: Colors.primary,
          };
        } else {
          return {
            backgroundColor:
              variant === "solid"
                ? `${HexToRGBA(Colors.primary, 0.12)}`
                : Colors.primary,
            color: Colors.primary,
          };
        }

      case "light":
        if (variant === "solid") {
          return {
            backgroundColor: Colors.white,
            color: Colors.primary,
          };
        } else {
          return {
            color: Colors.white,
            borderColor: `1px solid ${Colors.white}`,
          };
        }
    }
  }
};

export const active = (variant: Variant, styleType: StyleType, size: Size) => {
  if (size !== "social") {
    switch (styleType) {
      case "default":
        return {
          backgroundColor:
            variant === "solid" ? Colors.primary600 : Colors.primary,

          color: Colors.white,
        };
      case "secondary":
        return {
          backgroundColor: Colors.gray500,
          color: Colors.gray800,
        };
      case "dark":
        return {
          backgroundColor: Colors.gray1000,
          color: Colors.white,
        };
      case "light":
        return {
          backgroundColor: Colors.gray100,
          color: Colors.gray900,
        };
    }
  } else {
    switch (styleType) {
      case "default":
        if (variant === "outlined") {
          return {
            border: `1px solid ${Colors.primary}`,
            color: Colors.primary,
          };
        } else {
          return {
            backgroundColor:
              variant === "solid"
                ? `${HexToRGBA(Colors.primary, 0.12)}`
                : Colors.primary,
            color: Colors.primary,
          };
        }

      case "light":
        if (variant === "solid") {
          return {
            backgroundColor: Colors.white,
            color: Colors.primary,
          };
        } else {
          return {
            color: Colors.white,
            borderColor: `1px solid ${Colors.white}`,
          };
        }
    }
  }
};

export const disabledHover = (
  variant: Variant,
  styleType: StyleType,
  size: Size
) => {
  if (size !== "social") {
    switch (styleType) {
      case "default":
        return {
          color: variant === "solid" ? Colors.white : Colors.primary,

          backgroundColor: variant === "solid" ? Colors.primary : "transparent",
        };
      case "secondary":
        return {
          color: variant === "solid" ? Colors.white : Colors.primary,
          backgroundColor: variant === "solid" ? Colors.gray300 : "transparent",
        };
      case "dark":
        return {
          backgroundColor: variant === "solid" ? Colors.gray800 : "transparent",
          color: variant === "solid" ? Colors.white : Colors.gray800,
        };
      case "light":
        return {
          backgroundColor: variant === "solid" ? Colors.white : "transparent",
          color: variant === "solid" ? Colors.gray800 : Colors.white,
        };
    }
  } else {
    switch (styleType) {
      case "default":
        if (variant === "outlined") {
          return {
            backgroundColor: "transparent",
            border: `1px solid ${Colors.gray400}`,
            color: Colors.gray700,
          };
        } else {
          return {
            backgroundColor: HexToRGBA(Colors.gray700, 0.12),
            border: "none",
            color: Colors.gray700,
          };
        }

      case "light":
        if (variant === "solid") {
          return {
            backgroundColor: Colors.white,
            color: Colors.primary,
          };
        } else {
          return {
            color: Colors.white,
            borderColor: `1px solid ${Colors.white}`,
          };
        }
    }
  }
};

// case "default":
//     return variant === "solid"
//       ? HexToRGBA(Colors.gray700, 0.12)
//       : "transparent";
//   case "light":
//     return variant === "solid" ? Colors.gray100 : "transparent";

export const size = (size: Size) => {
  switch (size) {
    case "social":
      return "8px";
    case "small":
      return "12px 24px";

    case "default":
      return "15px 32px";
    case "large":
      return "18px 40px";
  }
};

export const fontSize = (size: Size) => {
  switch (size) {
    case "social":
      return "16px";
    case "small":
      return "12px ";

    case "default":
      return "14px";
    case "large":
      return "16px";
  }
};
