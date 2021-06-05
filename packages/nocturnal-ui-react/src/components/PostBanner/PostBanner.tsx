import React, { FC } from "react";

import * as styles from "./post-banner.module.css";

interface PostBannerProps {
  title: React.ReactNode;
  content: React.ReactNode;
  btnTitle: string;
  iconSrc?: string;
  iconSize?: string;
  successView: React.ReactNode;
  errorView: React.ReactNode;
  onSubmit?(e: React.FormEvent<HTMLFormElement>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  inputName?: string;
  inputType?: string;
  inputPlaceholder?: string;
  inputValue?: string | number | readonly string[];
  status?: "initial" | "success" | "error";
}

export const PostBanner: FC<PostBannerProps> = ({
  title,
  content,
  btnTitle,
  successView,
  errorView,
  onSubmit,
  onChange,
  inputName,
  inputType,
  inputPlaceholder,
  inputValue,
  status = "initial",
}) => {
  return (
    <div className={styles.banner}>
      <h3>{title}</h3>
      <div>{content}</div>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          className={styles.input}
          type={inputType}
          name={inputName}
          placeholder={inputPlaceholder}
          onChange={onChange}
          value={inputValue}
        />
        <button className={styles.btn}>{btnTitle}</button>
      </form>
      {status !== "initial" && (
        <div className={styles.result}>
          {status === "success" && successView}
          {status === "error" && errorView}
        </div>
      )}
    </div>
  );
};
