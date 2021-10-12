import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";

import Styles from "./roadmap.module.css";
export default function RoadMap() {
  return (
    <section id="road-map" className={Styles.roadmap}>
      <Container>
        <Row>
          <Image
            src={require("public/images/roadmap.png")}
            alt="tw"
            // layout="fill"
            quality={100}
          />
        </Row>
      </Container>
    </section>
  );
}
