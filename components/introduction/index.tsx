import { SVNBillo } from "fonts";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "reactstrap";

import Styles from "./introduction.module.scss";

export default function Introduction() {
  return (
    <section id="introduction" className={Styles.introduction}>
      <Row>
        <Col md={5}>
          <div className={Styles.under}></div>
          <div className={Styles.cat}>
            <Image
              src={"/images/cat.png"}
              width={508}
              height={548}
              alt=""
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </Col>
        <Col md={7}>
          <div className={`${SVNBillo.className} ${Styles.title}`}>
            What is <span className={Styles.blue}>teme</span>
          </div>
          <div>
            We are reshaping the meme era!
            <br />
            TEME is powered By AI Technology, meme coin Gaming, Restaking & Real
            World Asset (RWA). Buy upgrades, complete quests, invite friends and
            become the pioneer Set To DOMINATE All Memes!
          </div>
        </Col>
      </Row>
    </section>
  );
}
