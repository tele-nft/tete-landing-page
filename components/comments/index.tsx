import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Container, Row } from "reactstrap";

import Title from "../title";
import Styles from "./comments.module.css";

const items = [
  {
    Images: [
      require("public/images/comments/comment_1.png"),
      require("public/images/comments/comment_2.png"),
      require("public/images/comments/comment_3.png"),
    ],
  },
];

export default function Comments() {
  return (
    <section id="comments" className={Styles.comments}>
      <Container>
        <Row>
          <Title text="KOL SAY ABOUT TELE ?" />
        </Row>
        <Row>
          <Carousel>
            {items.map(({ Images }, index) => (
              <div key={index} className={Styles.list}>
                {Images.map((image) => (
                  <div key={image} className={Styles.item}>
                    <Image src={image} />
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
        </Row>
      </Container>
    </section>
  );
}
