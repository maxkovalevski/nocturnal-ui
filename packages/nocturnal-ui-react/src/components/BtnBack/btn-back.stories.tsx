import React from "react";
import { Story, Meta } from "@storybook/react";

import { BtnBack, BtnBackProps } from "./BtnBack";

export default {
  title: "Components/BtnBack",
  component: BtnBack,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<BtnBackProps> = (args) => <BtnBack {...args} />;

export const Main = Template.bind({});
Main.args = {
  children: "Click me",
};
