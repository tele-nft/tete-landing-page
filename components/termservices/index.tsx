import React from "react";
import { Col, Container, Row } from "reactstrap";
import Title from "../title";
import Styles from "./term.module.css";

export default function Term() {
  return (
    <section id="terms" className={Styles.terms}>
      <Container>
        <Row>
          <h3>
            {" "}
            <Title text="TERMS OF SERVICE" />
          </h3>
        </Row>
        <Row className={Styles.terms}>
          <h4></h4>
        </Row>
      </Container>
    </section>
  );
}
