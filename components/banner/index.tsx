import React from "react";
import { Container, Row } from "reactstrap";

export default function Banner() {
    return (
        <Container fluid>
            <Row>
                <img src={'/images/banner.png'} alt="banner" />
            </Row>
        </Container>
    );
}
