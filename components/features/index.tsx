import React from "react";
import { Container, Row } from "reactstrap";

import Title from "../title";
import Styles from "./features.module.css";

export default function Features() {
    return (
        <section id="features" className={Styles.features}>
            <Container>
                <Row>
                    <Title text="Features" />
                </Row>
                <Row>
                    <div className={Styles.list}>
                        <div className={Styles.item}>
                            <img src="./features/5.png" alt="5" />
                        </div>
                        <div className={Styles.item}>
                            <img src="./features/2.png" alt="2" />
                        </div>
                        <div className={Styles.item}>
                            <img src="./features/4.png" alt="4" />
                        </div>
                        <div className={Styles.item}>
                            <img src="./features/3.png" alt="3" />
                        </div>
                        <div className={Styles.item}>
                            <img src="./features/1.png" alt="1" />
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
}
