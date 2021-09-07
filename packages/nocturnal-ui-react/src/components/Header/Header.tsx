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
}

export const Header: FC<HeaderProps> = ({ logoTitle, navItems, linkView }) => {
  // const { pathname } = useLocation();

  return (
    <header className={headerStyles.header}>
      <Container>
        <div className={headerStyles.inner}>
          <Logo title={logoTitle} />
          <div className={headerStyles.row}>
            <Navbar items={navItems} linkView={linkView} />
          </div>
        </div>
      </Container>
    </header>
  );
};
