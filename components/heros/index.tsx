import Image from "next/image";
import React from "react";
import { Container, Row } from "reactstrap";

import Title from "../title";
import Styles from "./heros.module.css";

const data = [
  require("public/images/heros/hero1.png"),
  require("public/images/heros/hero2.png"),
  require("public/images/heros/hero3.png"),
  require("public/images/heros/hero4.png"),
  require("public/images/heros/hero5.png"),
  require("public/images/heros/hero6.png"),
];

export default function Heros() {
  return (
    <section id="characters">
      <Container>
        <Row>
          <Title text="CLAIM NFT" />
        </Row>
        <Row>
          <div className={Styles.list}>
            {data.map((hero, index) => (
              <div key={index} className={Styles.item}>
                <Image src={hero} />
              </div>
            ))}
          </div>
        </Row>
        <div className={Styles.claim}>
          <input type="button" value="CLAIM" />
          <div>COMING SOON</div>
        </div>
      </Container>
    </section>
  );
}
