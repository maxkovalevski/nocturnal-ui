import React, { FC } from "react";
import { Story, Meta } from "@storybook/react";

import { TagsPile, TagsPileProps } from "./TagsPile";

export default {
  title: "Components/TagsPile",
  component: TagsPile,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const Template: Story<TagsPileProps> = (args) => <TagsPile {...args} />;

export const Main = Template.bind({});
Main.args = {
  tags: Array.from({ length: 6 })
    .fill(undefined)
    .map((_, index) => ({
      name: `tag${index}`,
      link: `/tags/tag${index}`,
      count: getRandomInt(1, 10),
    })),
};
