import React from "react";
import { Container, Row } from "reactstrap";

import Title from "../title";
import Styles from "./token-metrics.module.css";

export default function TokenMetrics() {
    return (
        <section id="token-metrics" className={Styles['token-metrics']}>
            <Container>
                <Row className="d-flex flex-column align-items-center">
                    <Title text="Token Metrics" />
                    <img className={Styles.token} src="./images/token-metrics.png" alt="token" />
                </Row>
            </Container>
        </section>
    );
}
