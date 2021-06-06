import React, { FC } from "react";
import { Story, Meta } from "@storybook/react";

import { PostInfo, PostInfoProps } from "./PostInfo";

export default {
  title: "Components/PostInfo",
  component: PostInfo,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<PostInfoProps> = (args) => (
  <div style={{ maxWidth: "800px" }}>
    <PostInfo {...args} />
  </div>
);

export const Main = Template.bind({});
Main.args = {
  date: "2021-06-06",
};
