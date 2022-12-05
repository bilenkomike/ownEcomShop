interface ButtonInterface {
  children?: string;
  icon?:
    | "filter"
    | "card"
    | "next"
    | "cart"
    | "instagram"
    | "facebook"
    | "twitter"
    | "pinterest"
    | "youtube"
    | "google"
    | "linkedin";
  styleType: "default" | "secondary" | "dark" | "light";
  variant: "outlined" | "solid";
  disabled?: boolean;
  size: "large" | "default" | "small" | "social";
  iconPosition?: "before" | "after";
  type?: "button" | "submit";
}

export default ButtonInterface;
