import React from "react";
import Slider from "react-slick";
import { Container, Row } from "reactstrap";

import Title from "../title";
import Styles from "./introduction.module.css";

export default function Introduction() {
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
    };

    const heroes = [{}];

    return (
        <section id="introduction" className={Styles.introduction}>
            <Container>
                <Row>
                    <Title text="Introduction" />
                    <div className={Styles.content}>
                        GunHunter is an NFT game ecosystem that intends to create a Universe of Fighting between players on Binance Smart
                        Chains, Polygon, Solana, Polkadot, ...where millions of players from all over the world may participate in NFT
                        gaming blockchain in a simple, fast, and exciting way.
                    </div>
                </Row>
                <Row>
                    <div className={Styles.subTitle}>Metaverse</div>
                    <div>
                        <Slider {...settings}>
                            <div>
                                <div className={Styles.item}>
                                    <img src={'/images/heroes/1.png'} />
                                </div>
                            </div>
                            <div>
                                <div className={Styles.item}>
                                    <img src={'/images/heroes/2.png'} />
                                </div>
                            </div>
                            <div>
                                <div className={Styles.item}>
                                    <img src={'/images/heroes/3.png'} />
                                </div>
                            </div>
                            <div>
                                <div className={Styles.item}>
                                    <img src={'/images/heroes/4.png'} />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Row>
            </Container>
        </section>
    );
}
