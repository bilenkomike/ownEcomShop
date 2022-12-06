export type Option = {
  label: string;
  value: string | number;
};

interface InputInterface {
  name: string;
  variant: "large" | "default" | "small";
  label?: string;
  type: string;
  placeholder?: string;
  list?: string[];
  success?: boolean;
  error?: boolean;
  value?: string | number;
  additionalText?: string;
  onChange: (value: string) => void;
  min?: number;
  max?: number;
  step?: number;
  options?: Option[];

  icon?: "search" | "password" | "select";
  iconTypes?: "button" | "submit";
}

export default InputInterface;
