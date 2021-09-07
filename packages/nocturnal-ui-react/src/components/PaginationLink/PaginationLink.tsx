import React, { FC } from "react";

import { LinkView } from "../../typings/LinkView";

import * as styles from "./pagination-link.module.css";

export interface PaginationLinkProps {
  to: string;
  isActive?: boolean;
  isDisabled?: boolean;
  linkView?: LinkView;
}

export const PaginationLink: FC<PaginationLinkProps> = ({
  to,
  isActive = false,
  isDisabled = false,
  children,
  linkView = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>
}) => {
  const cls = isDisabled ? "disabled" : isActive ? "active" : "link";

  return (
    <>
      {linkView({ to, children, className: styles[cls] })}
    </>
  );
};
