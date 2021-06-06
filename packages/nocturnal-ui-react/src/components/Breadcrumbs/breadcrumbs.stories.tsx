import React from "react";
import { Story, Meta } from "@storybook/react";

import { Breadcrumbs, BreadcrumbsProps } from "./Breadcrumbs";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Main = Template.bind({});
Main.args = {
  items: [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/blog",
      label: "Blog",
    },
    {
      to: "/blog/first-post",
      label: "First post",
    },
  ],
};
