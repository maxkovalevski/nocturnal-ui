import React, { FC } from "react";
import { Story, Meta } from "@storybook/react";

import { PageTitle, PageTitleProps } from "./PageTitle";

export default {
  title: "Components/PageTitle",
  component: PageTitle,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<PageTitleProps> = (args) => (
  <PageTitle {...args}>Home</PageTitle>
);

export const Main = Template.bind({});
Main.args = {};
