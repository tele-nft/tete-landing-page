import React from "react";
import { Container, Row } from "reactstrap";

import styles from "./banner.module.css";

export default function Banner() {
  return (
    <Container>
      <Row>
        <div className={styles.text}>
          The first memeable game restaking & Rwa
        </div>
      </Row>
      <Row>
        <img src={"/images/tete.png"} alt="banner" />
      </Row>
      <Row>
        <div className={styles.text}>
          <span>memecoin</span> on Ton Block chain
        </div>
      </Row>
    </Container>
  );
}
