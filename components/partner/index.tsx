import Title from "components/title";
import React from "react";
import { Container, Row } from "reactstrap";

import Styles from "./partner.module.css";

export default function Partner() {
    return (
        <section id="partner" className={Styles.partner}>
            <Container>
                <Row>
                    <Title text="Partners" />
                    <img src={'/images/partner.png'} alt="partner" />
                </Row>
            </Container>
        </section>
    );
}
