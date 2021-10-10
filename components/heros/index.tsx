import React from "react";
import { Container, Row } from "reactstrap";

import Title from "../title";
import Styles from "./heros.module.css";

export default function Heros() {
    return (
        <section id="characters" className={Styles.characters}>
            <Container>
                <Row>
                    <Title text="characters" />
                </Row>
            </Container>
        </section>
    );
}
