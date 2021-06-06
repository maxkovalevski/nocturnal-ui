import React, { FC } from "react";
import { Story, Meta } from "@storybook/react";

import { InfoCard, InfoCardProps } from "./InfoCard";

export default {
  title: "Components/InfoCard",
  component: InfoCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<InfoCardProps> = (args) => (
  <InfoCard
    {...args}
    children={
      <>
        <h4 className="monospace">Block 1</h4>
        <p>
          Qui nisi culpa aliqua aliquip dolore deserunt adipisicing tempor.
          Reprehenderit irure nostrud nulla ipsum tempor ullamco qui adipisicing
          ad irure irure veniam. Commodo irure dolor non aliquip amet veniam
          irure dolor. Sunt ipsum incididunt excepteur occaecat est aliqua minim
          dolore consequat dolor.
        </p>
      </>
    }
  />
);

export const Main = Template.bind({});
Main.args = {
  variant: "grey",
};
