import React from "react";
import { Col, Container, Row } from "reactstrap";

import Styles from "./introduction.module.css";

export default function Introduction() {
  return (
    <section id="introduction" className={Styles.introduction}>
      <Container>
        <Row>
          <Col xs="6">
            <div className={Styles.title}>
              WHAT IS <span>TETE</span>?
            </div>
            <div className={Styles.content}>
              $ TELE the most memeable game memecoin on TON Blockchain.TELE is
              for the people, alway community owned and managed and designed to
              make memeCoins great again. Zero taxes, LP locked, $TELE.Fueled by
              pure meme power,$TELE will lead the way.
            </div>
          </Col>
          <Col xs="6">
            <img className={Styles.banner} src="/images/banner.png" />
          </Col>
        </Row>
        <Row>
          <div className={Styles.buttons}>
            <input type="button" value="AIRDROP" />
            <input type="button" value="BUY NOW" />
          </div>
        </Row>
      </Container>
    </section>
  );
}
