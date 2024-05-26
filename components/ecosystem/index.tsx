import Title from "components/title";
import React from "react";
import { Container, Row } from "reactstrap";

import Styles from "./ecosystem.module.css";

export default function Ecosystem() {
  return (
    <section id="ecosystem" className={Styles.ecosystem}>
      <Container>
        <Row className={Styles.ecosystemContain}>
          <Title text="Ecosystem" />
          <div className={Styles.description}>
            <p>
              TELE is a meme game restaking & Rwa ecosystem that aims to create
              engagement of players on TON connected to the ecosystem of
              Bitcoin, Ethereum, Zksycn and Binance Smart Chains, Solona,
              ​​Arbitrum... where trillions Players from all over the world can
              join the blockchain in a simple, fast and fun way through bridge
              meme coin TELE.
            </p>
          </div>
        </Row>
      </Container>
    </section>
  );
}
