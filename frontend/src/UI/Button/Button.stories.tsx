import Button from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Solid = Template.bind({});
Solid.args = {
  children: "Click me",
  size: "default",
  disabled: false,
  variant: "solid",
  styleType: "default",
  type: "button",
};
export const Disabled = Template.bind({});
Disabled.args = {
  children: "Click me",
  size: "default",
  disabled: true,
  variant: "solid",
  styleType: "default",
  type: "button",
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: "Click me",
  size: "default",
  disabled: false,
  variant: "outlined",
  styleType: "default",
  type: "button",
};

export const Small = Template.bind({});
Small.args = {
  children: "Click me",
  size: "small",
  disabled: false,
  variant: "solid",
  styleType: "default",
  type: "button",
};

export const Large = Template.bind({});
Large.args = {
  children: "Click me",
  size: "large",
  disabled: false,
  variant: "solid",
  styleType: "default",
  type: "button",
};

export const Icon = Template.bind({});
Icon.args = {
  children: "",
  size: "social",
  disabled: false,
  variant: "outlined",
  styleType: "default",
  type: "button",
  icon: "instagram",
};

export const Solid_Icon = Template.bind({});
Solid_Icon.args = {
  children: "",
  size: "social",
  disabled: false,
  variant: "solid",
  styleType: "default",
  type: "button",
  icon: "instagram",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Click me!",
  size: "default",
  disabled: false,
  variant: "solid",
  styleType: "secondary",
  type: "button",
};
