export type Variant = "outlined" | "solid";

export type Size = "large" | "default" | "small" | "social";

export type StyleType = "default" | "secondary" | "dark" | "light";

interface ButtonStylesTypes {
  variant: Variant;
  size: Size;
  styleType: StyleType;
}

export default ButtonStylesTypes;
