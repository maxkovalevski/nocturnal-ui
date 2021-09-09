import React, { FC } from "react";
import { Story, Meta } from "@storybook/react";

import { PostsList, PostsListProps } from "./PostsList";

export default {
  title: "Components/PostsList",
  component: PostsList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<PostsListProps> = (args) => (
  <div style={{ maxWidth: "800px" }}>
    <PostsList {...args} />
  </div>
);

export const Main = Template.bind({});
Main.args = {
  imgView: ({ title, imgSrc }) => <img src={imgSrc} alt={title} />,
  posts: [
    {
      id: "1",
      title: "First post",
      date: "2021-06-06",
      excerpt:
        "Sunt adipisicing pariatur ea eiusmod id ullamco reprehenderit excepteur ad elit cillum exercitation est.",
      tags: [
        {
          name: "tag1",
          link: "/tags/tag1",
        },
        {
          name: "tag2",
          link: "/tags/tag2",
        },
        {
          name: "tag3",
          link: "/tags/tag3",
        },
      ],
      link: "/posts/first-post",
    },
    {
      id: "2",
      title: "Second post",
      date: "2021-06-06",
      excerpt:
        "Sunt adipisicing pariatur ea eiusmod id ullamco reprehenderit excepteur ad elit cillum exercitation est.",
      tags: [
        {
          name: "tag1",
          link: "/tags/tag1",
        },
        {
          name: "tag2",
          link: "/tags/tag2",
        },
      ],
      link: "/posts/first-post",
      imgSrc: "https://source.unsplash.com/random?orientation=landscape",
    },
    {
      id: "3",
      title: "Third post",
      date: "2021-06-06",
      excerpt:
        "Sunt adipisicing pariatur ea eiusmod id ullamco reprehenderit excepteur ad elit cillum exercitation est.",
      tags: [
        {
          name: "tag1",
          link: "/tags/tag1",
        },
      ],
      link: "/posts/first-post",
      imgSrc: "https://source.unsplash.com/random?orientation=landscape",
    },
  ],
};
