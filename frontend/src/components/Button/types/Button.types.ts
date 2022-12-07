interface ButtonInterface {
  children?: string;
  icon?:
    | "heart"
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
  onClick?: () => void;
  removeFullWidth?: boolean;
}

export default ButtonInterface;
