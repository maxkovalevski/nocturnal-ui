import React, { FC } from "react";
import { Story, Meta } from "@storybook/react";

import { NavLink, NavLinkProps } from "./NavLink";

export default {
  title: "Components/NavLink",
  component: NavLink,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<NavLinkProps> = (args) => <NavLink {...args} />;

export const Main = Template.bind({});
Main.args = {
  children: "Home",
  isActive: false,
  to: "/",
};
