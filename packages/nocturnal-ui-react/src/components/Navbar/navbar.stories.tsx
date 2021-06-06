import React, { FC } from "react";
import { Story, Meta } from "@storybook/react";

import { Navbar, NavbarProps } from "./Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Main = Template.bind({});
Main.args = {
  currentPath: "/",
  items: [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/blog",
      name: "Blog",
    },
    {
      path: "/about",
      name: "About",
    },
  ],
};
