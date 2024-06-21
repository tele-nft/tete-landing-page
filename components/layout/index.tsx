import React from "react";
import styles from "./layout.module.scss";
import { Container } from "reactstrap";
import Header from "components/header";
import Footer from "components/footer";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <div className={styles.ellipse}></div>
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </div>
  );
}
