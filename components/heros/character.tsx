import Image from "next/image";
import React from "react";
import { Col, Row } from "reactstrap";

import Styles from "./heros.module.css";

type CharacterType = {
    name: string;
    description: string;
    maxim: string[];
    star: number;
    image: any;
    background: any;
};

export default function Character({ name, description, maxim, star, image, background }: CharacterType) {
    return (
        <Row className={Styles.characterContain}>
            <Col className={Styles.characterDes}>
                <p className={Styles.characterName}>{name}</p>
                <Row>
                    <div className={Styles.stars}>
                        {Array.from({ length: star }, (_, i) => i).map((_, key) => (
                            <Image
                                key={key}
                                className={Styles.star}
                                src={require('public/images/star.png')}
                                alt={`star-${key}`}
                                height={35}
                                width={45}
                            />
                        ))}
                    </div>
                </Row>
                <p className={Styles.description}>{description}</p>
                {maxim.map((item: any, key: number) => (
                    <p key={key} className={Styles.maxim}>
                        {item}
                    </p>
                ))}
            </Col>
            <Col className={Styles.characterImg}>
                <Image src={image} alt="character-1" />
            </Col>
        </Row>
    );
}
