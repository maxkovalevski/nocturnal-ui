import React, { FC } from "react";
import { Story, Meta } from "@storybook/react";

import { PaginationLink, PaginationLinkProps } from "./PaginationLink";

export default {
  title: "Components/PaginationLink",
  component: PaginationLink,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<PaginationLinkProps> = (args) => (
  <PaginationLink {...args} />
);

export const Main = Template.bind({});
Main.args = {
  to: "/",
  isActive: false,
  isDisabled: false,
  children: 1,
};
