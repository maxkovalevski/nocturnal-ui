import React, { FC, ReactNode } from "react";

import { NavItem } from "../../types";

import { NavLink } from "../NavLink";

import * as styles from "./navbar.module.css";

interface NavbarProps {
  currentPath?: string;
  items: NavItem[];
  withLine?: boolean;
  contentAfter?: ReactNode;
}

export const Navbar: FC<NavbarProps> = ({
  items,
  currentPath = "",
  withLine = false,
  contentAfter,
}) => {
  return (
    <nav className={styles.navbar}>
      {items.map(({ name, path }) => (
        <NavLink
          key={path}
          to={path}
          isActive={
            path === "/" ? currentPath === path : currentPath.includes(path)
          }
        >
          {name}
        </NavLink>
      ))}
      {withLine && <span className={styles.line}></span>}
      {contentAfter && contentAfter}
    </nav>
  );
};
