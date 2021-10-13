import React from "react";
import { Container, Row } from "reactstrap";

import Title from "../title";
import Styles from "./introduction.module.css";

export default function Introduction() {
    return (
        <section id="introduction" className={Styles.introduction}>
            <Container>
                <Row>
                    <Title text="Introduction" />
                    <p className={Styles.content}>
                        GunHunter is an NFT game and metaverses ecosystem that intends to create a Universe of Fighting between players on
                        Binance Smart Chains, Polygon, Solona, Polkadot, ...where millions of players from all over the world.
                    </p>
                    <img id="thumbnail" src="./images/thumbnail.jpg" alt="thumbnail" />
                </Row>
            </Container>
        </section>
    );
}
