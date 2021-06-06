import React, { FC } from "react";
import { Story, Meta } from "@storybook/react";

import { ContentCard, ContentCardProps } from "./ContentCard";

export default {
  title: "Components/ContentCard",
  component: ContentCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ContentCardProps & { children: React.ReactNode }> = (
  args
) => (
  <div style={{ maxWidth: "800px" }}>
    <ContentCard {...args} />
  </div>
);

export const Main = Template.bind({});
Main.args = {
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

export const WithTopBottomView = Template.bind({});
WithTopBottomView.args = {
  topView: (
    <div style={{ background: "#542C85" }}>
      Commodo nisi ex labore occaecat ex.
    </div>
  ),
  bottomView: (
    <div style={{ background: "#542C85" }}>
      Ex reprehenderit pariatur consequat est sunt enim nostrud anim consectetur
      labore.
    </div>
  ),
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
