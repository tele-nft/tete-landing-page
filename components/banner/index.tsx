import IconArrow from "components/icons/arrow";
import IconTon from "components/icons/ton";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "reactstrap";

import styles from "./banner.module.scss";

const icons = [
  {
    img: "/images/icons/icon-web.png",
  },
  {
    img: "/images/icons/icon-x.png",
  },
  {
    img: "/images/icons/icon-telegram.png",
  },
  {
    img: "/images/icons/icon-youtube.png",
  },
];

export default function Banner() {
  return (
    <Container>
      <Row>
        <Col xs="5">
          <div className={styles.text}>
            <div className={styles.content}>
              <Image
                alt="teme_white1` "
                src={"/images/temetext_white.png"}
                width={"529px"}
                height={"182px"}
              />
              <div>
                The first memeable game AI restarking & RWA memecoin on
                <span>
                  {" "}
                  <IconTon />
                </span>
              </div>
            </div>
            <button className={styles.button}>
              Play Now
              <IconArrow />
            </button>
            <div className={styles.icons}>
              {icons.map(({ img }, index) => (
                <a href="#" key={index}>
                  <Image src={img} width={80} height={80} />
                </a>
              ))}
            </div>
          </div>
        </Col>
        <Col xs="7">
          <Image
            src={"/images/teme.png"}
            alt="banner"
            width={"1170px"}
            height={"1170px"}
          />
        </Col>
      </Row>
    </Container>
  );
}
