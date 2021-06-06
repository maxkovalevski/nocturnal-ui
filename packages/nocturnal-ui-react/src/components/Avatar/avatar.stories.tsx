import React from "react";
import { Story, Meta } from "@storybook/react";

import { Avatar, AvatarProps } from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Main = Template.bind({});
Main.args = {
  src:
    "https://pbs.twimg.com/profile_images/1373729042994765825/t2ks2Qz8_400x400.jpg",
};
