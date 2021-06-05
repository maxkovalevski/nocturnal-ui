import React, { FC } from "react";

import { Container } from "../Container";

import * as styles from "./footer.module.css";

export const Footer: FC = ({ children }) => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>{children && children}</div>
      </Container>
    </footer>
  );
};
