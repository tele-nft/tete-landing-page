import IconArrow from "components/icons/arrow";
import IconTon from "components/icons/ton";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "reactstrap";

import styles from "./banner.module.scss";
import { Socials } from "config";

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
                width={529}
                height={182}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <div>
                The first memeable game AI restarking & RWA memecoin on
                <span>
                  {" "}
                  <IconTon />
                </span>
              </div>
            </div>
            <button
              className={styles.button}
              onClick={() => window.open("https://t.me/temecoin_bot", "_blank")}
            >
              Play Now
              <IconArrow />
            </button>
            <div className={styles.icons}>
              {Socials.map(({ img, url }, index) => (
                <a href={url} key={index} target="_blank">
                  <Image
                    src={img}
                    width={80}
                    height={80}
                    alt={`social_${index}`}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </Col>
        <Col xs="7">
          <Image
            src={"/images/teme.png"}
            alt="banner"
            width={1170}
            height={1170}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}
