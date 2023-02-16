import Title from "./Title";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => (
  <Title {...args}>{args.children}</Title>
);

export const Default = Template.bind({});
Default.args = {
  children: "Title story component",
};
