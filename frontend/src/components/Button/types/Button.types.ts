interface ButtonInterface {
  children: string;
  icon?: "next" | "cart" | "instagram";
  styleType: "default" | "secondary" | "dark" | "light";
  variant: "outlined" | "solid";
  disabled?: boolean;
  size: "large" | "default" | "small" | "social";
  iconPosition?: "before" | "after";
}

export default ButtonInterface;
