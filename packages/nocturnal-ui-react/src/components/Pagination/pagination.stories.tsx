import React, { FC } from "react";
import { Story, Meta } from "@storybook/react";

import { Pagination, PaginationProps } from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const Main = Template.bind({});
Main.args = {
  currentPage: 1,
  pagesCount: 10,
  routePath: "/blog",
  pageRoutePath: "/page",
};
