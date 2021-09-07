import React, { FC } from "react";

import { LinkView } from "../../typings/LinkView";

import * as styles from "./logo.module.css";

export interface LogoProps {
  title: string;
  linkView?: LinkView;
}

export const Logo: FC<LogoProps> = ({
  title,
  linkView = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>,
}) => {
  return <>{linkView?.({ to: '/', className: styles.logo, children: title })}</>;
};
