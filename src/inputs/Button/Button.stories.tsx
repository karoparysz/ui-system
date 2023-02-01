// Button.stories.tsx
import { Meta, Story } from "@storybook/preact";
import { h } from "preact";
import { Button as MyButton } from "./Button";

export default {
  component: MyButton,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
} as Meta;

export const Button: Story = (args) => (
  <MyButton {...args} onClick={() => {}}>
    Click me!
  </MyButton>
);

Button.args = {
  disabled: false,
  variant: "primary",
};
