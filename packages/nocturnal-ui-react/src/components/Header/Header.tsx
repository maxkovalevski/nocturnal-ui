import React, { FC } from "react";

import { Navbar } from "../Navbar";
import { Logo } from "../Logo";
import { Container } from "../Container";

import { NavItem } from "../../common/types";
import { LinkView } from "../../typings/LinkView";

import * as headerStyles from "./header.module.css";

interface HeaderProps {
  logoTitle: string;
  navItems: NavItem[];
  linkView?: LinkView;
  currentPath?: string;
}

export const Header: FC<HeaderProps> = ({ logoTitle, navItems, linkView, currentPath }) => {
  // const { pathname } = useLocation();

  return (
    <header className={headerStyles.header}>
      <Container>
        <div className={headerStyles.inner}>
          <Logo title={logoTitle} linkView={linkView} />
          <div className={headerStyles.row}>
            <Navbar items={navItems} linkView={linkView} currentPath={currentPath} />
          </div>
        </div>
      </Container>
    </header>
  );
};
