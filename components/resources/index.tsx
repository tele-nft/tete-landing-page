import Image from "next/image";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";

import FAQ from "./FAQ";
import styles from "./resources.module.css";

export default function Resources() {
  return (
    <section id="resources">
      <Container>
        <Row className={styles.warning}>
          <div>
            <Image
              src={require("public/images/warning.png")}
              alt="warning"
              height={20}
              width={20}
            />
            TELE is a meme coin with no intrinsic value or expectation of
            financial return.
          </div>
          <div>
            There is no formal team or roadmap. The coin is completely useless
            and for entertainment purposes only.
          </div>
        </Row>
        <Row className={styles.resources}>
          <Col lg={3} sm={6}>
            <Image src={require("public/images/logo.png")} alt="logo" />
          </Col>
          <Col lg={3} sm={6}>
            <ListGroup flush className={styles.tabs}>
              <ListGroupItem className={styles["item"]} active>
                FAQ
              </ListGroupItem>
              <ListGroupItem
                className={styles["item"]}
                action
                onClick={() => window.open("WPP.pdf", "_blank")}
              >
                White Paper
              </ListGroupItem>
              <ListGroupItem
                className={styles["item"]}
                href="#road-map"
                tag="a"
              >
                Road Map
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg={6} sm={12}>
            <FAQ />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
