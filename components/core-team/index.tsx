import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Styles from "./coreteam.module.css";
import Image from "next/image";

export default function CoreTeam() {
  return (
    <section id="core-team" className={Styles.coreteam}>
      <Container>
        <Image src={require("public/images/ct3.jpeg")} />
        <Image src={require("public/images/ct4.jpeg")} />
      </Container>
    </section>
  );
}
