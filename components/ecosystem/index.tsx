import React from "react";
import { Col, Container, Row } from "reactstrap";

import Styles from "./ecosystem.module.css";

export default function Ecosystem() {
  return (
    <section id="ecosystem" className={Styles.ecosystem}>
      <Container>
        <Row>
          <a href="#" className={Styles["info-banner"]}>
            <img
              src="./images/banner.svg"
              alt="banner"
              style={{ width: "100%" }}
            />
          </a>
        </Row>
        <Row>
          <Col
            xs={5}
            className="mb-3 d-flex justify-content-center flex-column"
          >
            <div className={Styles.title}>GunHunter Ecosystem</div>
            <div className={Styles.description}>
              <p>
                GunHunter is an NFT game ecosystem that intends to create a
                Universe of Fighting between players on Binance Smart Chains,
                Polygon, Solana, Polkadot, ...where millions of players from all
                over the world may participate in NFT gaming blockchain in a
                simple, fast, and exciting way.
              </p>
              <p>
                GunHunter will become one of the most popular metaverses for
                players all over the world to compete in, eventually forming an
                e-sports
                <span className={Styles["read-more"]}>...Read more</span>
              </p>
            </div>
          </Col>
          <Col xs={7}></Col>
        </Row>
      </Container>
    </section>
  );
}
