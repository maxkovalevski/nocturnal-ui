import React, { CSSProperties, FC } from "react";
import { Link } from "@reach/router";

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
}

export type BtnBackProps = BtnBackMainProps & BtnBackTypeProps;

export const BtnBack: FC<BtnBackProps> = ({
  children,
  direction = "left",
  style = {},
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
      {props.type === "link" ? (
        <Link to={props.to || ""} className={styles[direction]}>
          {view}
        </Link>
      ) : (
        <button onClick={props.onClick} className={styles[direction]}>
          {view}
        </button>
      )}
    </div>
  );
};
