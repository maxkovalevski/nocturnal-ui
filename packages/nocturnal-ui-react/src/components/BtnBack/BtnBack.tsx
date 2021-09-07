import React, { CSSProperties, FC } from "react";

import { LinkView } from "../../typings/LinkView";

import * as styles from "./btn-back.module.css";

interface BtnBackButtonProps {
  type: "button";
  onClick(): void;
}

interface BtnBackLinkProps {
  type: "link";
  to: string;
}

type BtnBackTypeProps = BtnBackButtonProps | BtnBackLinkProps;

interface BtnBackMainProps {
  children: string;
  direction?: "left" | "right";
  style?: CSSProperties;
  linkView?: LinkView;
}

export type BtnBackProps = BtnBackMainProps & BtnBackTypeProps;

export const BtnBack: FC<BtnBackProps> = ({
  children,
  direction = "left",
  style = {},
  linkView = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>,
  ...props
}) => {
  const view = (
    <>
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        ></path>
      </svg>
      <span>
        {children.length > 40 ? `${children.substr(0, 40)}...` : children}
      </span>
    </>
  );

  return (
    <div className={styles.wrapper} style={style}>
      {props.type === "link" ? linkView?.({ to: props.to || "", className: styles[direction], children: view }) : (
        <button onClick={props.onClick} className={styles[direction]}>
          {view}
        </button>
      )}
    </div>
  );
};
