import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import RoadMapImage from "public/images/roadmap.svg";
import Title from "components/title";
import Styles from "./roadmap.module.css";

export default function RoadMap() {
  return (
    <section id="road-map" className={Styles.roadmap}>
      <Container>
        <Title text="roadmap" />
        <RoadMapImage />
      </Container>
    </section>
  );
}
