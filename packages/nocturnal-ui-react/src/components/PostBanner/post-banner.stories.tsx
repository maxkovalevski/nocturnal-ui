import React, { FC } from "react";
import { Story, Meta } from "@storybook/react";

import { PostBanner, PostBannerProps } from "./PostBanner";

export default {
  title: "Components/PostBanner",
  component: PostBanner,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<PostBannerProps> = (args) => <PostBanner {...args} />;

export const Main = Template.bind({});
Main.args = {
  title: "Sign Up To...",
  content: (
    <div>
      Amet do quis proident ut culpa tempor veniam aute aliqua consequat ea sint
      nostrud deserunt. Aliquip laborum pariatur est esse. Quis fugiat amet esse
      Lorem incididunt fugiat enim occaecat laboris.
    </div>
  ),
  btnTitle: "Sign Up",
  successView: () => <div>Congratulations!</div>,
  errorView: () => <div>Something goes wrong</div>,
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => {},
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  inputName: "username",
  inputType: "text",
  inputPlaceholder: "Type username",
  inputValue: "",
  status: "initial",
};
