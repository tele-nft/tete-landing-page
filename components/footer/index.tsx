import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";

import Styles from "./footer.module.css";

export default function Footer() {
  return (
    <section id="privace" className={Styles.bg}>
      <Container className={Styles.footer}>
        <div className={Styles.image}>
          <img src={"/images/logo.png"} />
        </div>
        <div className={Styles.content}>
          <Row>
            <Col xs={4}>
              <div className={Styles.head}>About</div>
              <ul className={Styles.items}>
                <li>
                  <Link href="/">
                    <a className={Styles.link}>Overview</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className={Styles.link}>Token Metric</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className={Styles.link}>Game Play</a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xs={4}>
              <div className={Styles.head}>FAQ</div>
              <ul className={Styles.items}>
                <li>
                  <Link href="/term-services">
                    <a className={Styles.link}>Terms of Service</a>
                  </Link>
                </li>
                <li>
                  <Link href="/privace-policy">
                    <a className={Styles.link}>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://docs.gunhunternft.net/">
                    <a target="_blank" className={Styles.link}>
                      Whitepaper
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xs={4}>
              <div className={Styles.head}>SOCIALS</div>

              <ul className={Styles.items}>
                <li>
                  <Link href="https://discord.gg/9hVZWjMK6y">
                    <a target="_blank" className={Styles.link}>
                      Discord
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/GunHunterNFT">
                    <a target="_blank" className={Styles.link}>
                      Twitter
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="http://t.me/GunHunterChannel">
                    <a target="_blank" className={Styles.link}>
                      Telegram
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
