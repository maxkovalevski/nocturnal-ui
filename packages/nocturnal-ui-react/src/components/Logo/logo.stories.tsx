import React, { FC } from "react";
import { Story, Meta } from "@storybook/react";

import { Logo, LogoProps } from "./Logo";

export default {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Main = Template.bind({});
Main.args = {
  title: "Logotype",
};
