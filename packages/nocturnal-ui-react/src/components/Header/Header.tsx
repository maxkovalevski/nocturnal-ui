import React, { FC } from "react";
import { useLocation } from "@reach/router";

import { Navbar } from "../Navbar";
import { Logo } from "../Logo";
import { Container } from "../Container";

import { NavItem } from "../../types";

import * as headerStyles from "./header.module.css";

interface HeaderProps {
  logoTitle: string;
  navItems: NavItem[];
}

export const Header: FC<HeaderProps> = ({ logoTitle, navItems }) => {
  const { pathname } = useLocation();

  return (
    <header className={headerStyles.header}>
      <Container>
        <div className={headerStyles.inner}>
          <Logo title={logoTitle} />
          <div className={headerStyles.row}>
            <Navbar items={navItems} currentPath={pathname} />
          </div>
        </div>
      </Container>
    </header>
  );
};
