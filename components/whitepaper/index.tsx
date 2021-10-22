import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Title from "components/title";
import Styles from "./whitepaper.module.css";

export default function Whitepaper() {
  return (
    <section id="whitepaper" className={Styles.whitepaper}>
      <Container>
        <Title text="whitepaper" />
        <Image src={require("public/images/legal/whitepaper.jpeg")} />
      </Container>
    </section>
  );
}
