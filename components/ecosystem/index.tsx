import React from "react";
import { Col, Container, Row } from "reactstrap";

import Styles from "./ecosystem.module.css";

export default function Ecosystem() {
    return (
        <section id="ecosystem" className={Styles.ecosystem}>
            <Container>
                <Row>
                    <a href="#" className={Styles['info-banner']}>
                        <img src="./images/banner.svg" alt="banner" style={{ width: '100%' }} />
                    </a>
                </Row>
                <Row>
                    <Col xs={5} className="mb-3 d-flex justify-content-center flex-column">
                        <div className={Styles.title}>GunHunter Ecosystem</div>
                        <div className={Styles.description}>
                            <p>
                                GunHunter is an NFT game ecosystem that intends to create a Universe of Fighting between players on Binance
                                Smart Chains, Polygon, Solona, Polkadot, ...where millions of players from all over the world may
                                participate in NFT gaming blockchain in a simple, fast, and exciting way.
                            </p>
                            <p>
                                GunHunter will become one of the most popular metaverses for players all over the world to compete in,
                                eventually forming an e-sports marketplace that transcends time and geography to provide games to people all
                                over the world. The game is played by the players. Plot Summary: In the future, where intense and
                                intelligent virtual arenas players battle and win by playing all of the characters and using their hunter's
                                top talents. In the universe of the metaverse, the ultimate winners obtain awards for the winners of PVP
                                competition wisdom from two people, or form teams to play against one other between countries.
                            </p>
                            <p>In GunHunter, users will have the basic hunter characters Fierce Wolf, Innocent Rabbit, Master Fox. Pig</p>
                        </div>
                    </Col>
                    <Col xs={7}></Col>
                </Row>
            </Container>
        </section>
    );
}
