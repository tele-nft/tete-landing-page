import Title from "components/title";
import Image from "next/image";
import React from "react";
import { Container, Row } from "reactstrap";

import Styles from "./token-metrics.module.css";

export default function TokenMetrics() {
  return (
    <section id="token-metrics" className={Styles["token-metrics"]}>
      <Container>
        <Row>
          <Title text="TOKENNOMICS" />
        </Row>
        <Row>
          <Image src={require("public/images/token.png")} alt="token" />
        </Row>
      </Container>
    </section>
  );
}
