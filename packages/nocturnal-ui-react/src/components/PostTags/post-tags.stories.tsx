import React, { FC } from "react";
import { Story, Meta } from "@storybook/react";

import { PostTags, PostTagsProps } from "./PostTags";

export default {
  title: "Components/PostTags",
  component: PostTags,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<PostTagsProps> = (args) => <PostTags {...args} />;

export const Main = Template.bind({});
Main.args = {
  tags: Array.from({ length: 6 })
    .fill(undefined)
    .map((_, index) => ({
      name: `tag${index}`,
      link: `/tags/tag${index}`,
    })),
};
