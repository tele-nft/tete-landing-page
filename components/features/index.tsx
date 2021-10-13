import React from "react";
import { Col, Container, Row } from "reactstrap";

import Title from "../title";
import Styles from "./features.module.css";

export default function Features() {
    return (
        <section id="features" className={Styles.features}>
            <Container>
                <Row>
                    <Title text="Features" />
                </Row>
                <Row className="">
                    <Col className={Styles.feature}>
                        <img src="./images/market-place.png" alt="market" />

                        <h3>MARKETPLACE</h3>
                        <h4>Use the Marketplace to find your best Hero and trade rare equipment with other players.</h4>
                    </Col>
                    <Col className={Styles.feature}>
                        <img src="./images/hero-farming.png" alt="hero" />
                        <h3>HUNTER FARMING</h3>
                        <h4>
                            In addition to participating in combat, they can let Hero automatically cultivate and harvest. A large amount of
                            tokens will automatically flow to your wallet.
                        </h4>
                    </Col>
                    <Col className={Styles.feature}>
                        <img src="./images/play-game.png" alt="game" />
                        <h3>PLAY GAME</h3>
                        <h4>Prepare for Combat by shopping for the best heroes, training your best heroes, and learning powerful skills</h4>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
