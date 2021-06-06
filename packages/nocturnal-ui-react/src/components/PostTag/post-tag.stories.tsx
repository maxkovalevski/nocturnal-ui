import React, { FC } from "react";
import { Story, Meta } from "@storybook/react";

import { PostTag, PostTagProps } from "./PostTag";

export default {
  title: "Components/PostTag",
  component: PostTag,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<PostTagProps & { children: React.ReactNode }> = (
  args
) => <PostTag {...args} />;

export const Main = Template.bind({});
Main.args = {
  children: "tag1",
  link: "tag1",
};
