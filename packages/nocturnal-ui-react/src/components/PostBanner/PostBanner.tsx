import React, { FC } from "react";

// css was rewritten to JS's objects because this component as MDX component
// in my blog project MDX works by bundleMDX which uses esbuild under the hood
// by default esbuild doesn't support css modules 
// so for now styles are written as objects instead of css modules
// import * as styles from "./post-banner.module.css";

export interface PostBannerProps {
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

const bannerStyle = {
  padding: '20px 30px 30px 30px',
  borderRadius: '4px',
  marginBottom: '20px',
  background: '#212123',
  border: '2px dashed',
  borderColor: '#759cc0',
}

const titleStyle = {
  display: 'inline-block',
  marginBottom: '1.2rem',
  fontFamily: 'Roboto Mono, monospace',
  fontWeight: 700,
  borderBottomWidth: '2px',
  //borderBottomStyle: 'solid',
  borderBottomColor: '#484848',
  //marginBottom: '2rem',
  borderStyle: 'solid',
}

const formStyle = {
  marginBottom: '15px',
}

const inputStyle = {
  background: '#f4f4f4',
  outline: 'none',
  border: '1px solid #b5b6b7',
  padding: '18px 14px',
  borderRadius: '4px',
  maxWidth: '360px',
  width: '100%',
  /* color: #b5b6b7; */
  color: '#333',

  fontSize: '1.3rem',
}

const btnStyle = {
  marginLeft: '20px',
  marginBottom: '5px',
  /* background: none; */
  outline: 'none',
  //border: 'none',
  fontFamily: "Roboto Mono",
  /* border-bottom: 2px solid #484848; */
  //padding: 0,

  background: '#387cc8',
  padding: '0 25px',
  height: '62px',
  borderRadius: '4px',
  fontWeight: 700,
  border: '1px solid #1c1d1e',

  fontSize: '1.3rem',
}

const resultStyle = {
  fontSize: '1.2rem !important',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
} as React.CSSProperties;


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
    <div style={bannerStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <div>{content}</div>
      <form style={formStyle} onSubmit={onSubmit}>
        <input
          style={inputStyle}
          type={inputType}
          name={inputName}
          placeholder={inputPlaceholder}
          onChange={onChange}
          value={inputValue}
        />
        <button style={btnStyle}>{btnTitle}</button>
      </form>
      {status !== "initial" && (
        <div style={resultStyle}>
          {status === "success" && successView}
          {status === "error" && errorView}
        </div>
      )}
    </div>
  );
};
