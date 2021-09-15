import React, { FC, useState } from "react";
import { Story, Meta } from "@storybook/react";

import { PostBanner, PostBannerProps } from "./PostBanner";

export default {
  title: "Components/PostBanner",
  component: PostBanner,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<PostBannerProps> = (args) => {
  const [val, setVal] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [status, setStatus] = useState<"initial" | "success" | "error">();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (count % 2 == 0) {
      setStatus('success');
    } else {
      setStatus('error');
    }

    setCount((prev) => prev + 1);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.currentTarget.value);
  }

  return <div style={{maxWidth: '900px'}}>
    <PostBanner 
      {...args} 
      status={status} 
      onSubmit={onSubmit} 
      inputValue={val} 
      onChange={onChange} 
    />
  </div>
};

export const Main = Template.bind({});
Main.args = {
  title: "Sign Up To...",
  content: (
    <p>
      Amet do quis proident ut culpa tempor veniam aute aliqua consequat ea sint
      nostrud deserunt. Aliquip laborum pariatur est esse. Quis fugiat amet esse
      Lorem incididunt fugiat enim occaecat laboris.
    </p>
  ),
  btnTitle: "Subscribe",
  successView: <div>
    <span>Please go confirm your subscription!</span>
  </div>,
  errorView: <div>
    <span>Oops, Something went wrong! Try again.</span>
  </div>,
  inputName: "email",
  inputType: "email",
  inputPlaceholder: "Email address",
  inputValue: "",
  status: "initial",
};
