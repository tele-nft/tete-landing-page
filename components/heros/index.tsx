import React from "react";
import { Container, Row } from "reactstrap";

import Title from "../title";

export default function Heros() {
    return (
        <section id="characters">
            <Container>
                <Row>
                    <Title text="characters" />
                </Row>
            </Container>
        </section>
    );
}
