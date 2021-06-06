import React, { FC } from "react";
import { Story, Meta } from "@storybook/react";

import { PostCard, PostCardProps } from "./PostCard";

export default {
  title: "Components/PostCard",
  component: PostCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<PostCardProps> = (args) => (
  <div style={{ maxWidth: "800px" }}>
    <PostCard {...args} />
  </div>
);

export const Main = Template.bind({});
Main.args = {
  id: "1",
  view: "row",
  title: "First post",
  date: "2021-06-06",
  excerpt:
    "Eu sint in eiusmod Lorem nulla eiusmod officia. Est aute consequat duis aliquip sunt cillum reprehenderit aute occaecat quis. ",
  tags: [
    {
      name: "tag1",
      link: "/tags/tag1",
    },
  ],
  link: "/posts/first-post",
  imgSrc: "https://source.unsplash.com/random?orientation=landscape",
};
