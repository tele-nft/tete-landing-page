import React from "react";
import { Container, Row } from "reactstrap";

import Title from "../title";
import Styles from "./introduction.module.css";

export default function Introduction() {
  return (
    <section id="introduction" className={Styles.introduction}>
      <Container>
        <Row>
          <Title text="Introduction" />
          <p className={Styles.content}>
            GunHunter is an NFT game ecosystem that intends to create a Universe
            of Fighting between players on Binance Smart Chains, Polygon,
            Solana, Polkadot, ...where millions of players from all over the
            world may participate in NFT gaming blockchain in a simple, fast,
            and exciting way.
          </p>
          <img id="thumbnail" src="./images/thumbnail.jpg" alt="thumbnail" />
        </Row>
      </Container>
    </section>
  );
}
