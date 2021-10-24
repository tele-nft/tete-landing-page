import React from "react";
import { Col, Container, Row } from "reactstrap";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import Link from "next/link";

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
        <Row className={Styles.ecosystemContain}>
          <Col className={Styles.ecosystemDes}>
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
                <Link href="https://docs.gunhunternft.us/ii-gunhunter-ecosystem">
                  <a target="_blank">
                    <span className={Styles["read-more"]}>...Read more</span>
                  </a>
                </Link>
              </p>
            </div>
          </Col>
          <Col className={Styles.ecosystemAsset}>
            <Carousel>
              <Image
                src={require("public/images/ecosystem.jpg")}
                alt="ecosystem"
              />
              <div className={Styles.videoContainer}>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/d4lyj3jYG4o?mute=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
