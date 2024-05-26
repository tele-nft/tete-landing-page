import Title from "components/title";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";

// import RoadMapImage from "public/images/roadmap.svg";
export default function RoadMap() {
  return (
    <section id="road-map">
      <Container>
        <Title text="road map" />
        <Image src={require("public/images/roadmap.png")} alt="roadmap" />
      </Container>
    </section>
  );
}
