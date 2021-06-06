import React, { FC } from "react";
import { Story, Meta } from "@storybook/react";

import { PostContent, PostContentProps } from "./PostContent";

export default {
  title: "Components/PostContent",
  component: PostContent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<PostContentProps & { children: React.ReactNode }> = (
  args
) => (
  <div style={{ maxWidth: "800px" }}>
    <PostContent {...args} />
  </div>
);

export const Main = Template.bind({});
Main.args = {
  title: "First post",
  date: "2021-06-06",
  tags: [
    {
      name: "tag1",
      link: "/tags/tag1",
    },
  ],
  imgSrc: "https://source.unsplash.com/random?orientation=landscape",
  children: (
    <>
      <p>
        Adipisicing quis aliqua laborum consectetur ipsum reprehenderit aliqua
        ea sit.
      </p>
      <p>
        Aliquip ut qui irure aliquip occaecat commodo officia consectetur non ex
        sint sint incididunt. Excepteur non et esse fugiat ea ipsum ullamco sunt
        ad quis consequat officia. Elit officia ex quis voluptate ut occaecat
        sunt. Nulla enim magna tempor deserunt reprehenderit dolor. Mollit qui
        amet sunt eu velit sint eu reprehenderit officia in amet ex. Veniam
        Lorem nisi velit Lorem dolor veniam tempor irure aute commodo aute ipsum
        minim est.
      </p>
    </>
  ),
};
