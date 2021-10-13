import React from 'react';
import { Row, Col } from 'reactstrap';
import Image from 'next/image';

import Styles from './heros.module.css';

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
    <section id="character" className={Styles.characters}>
      <Row className={Styles.characterContain}>
        <Col className={Styles.characterDes}>
          <div className={Styles.characterAvatar}>
            <Image src={background} alt="character-1-bg" layout="fill" objectFit="cover" />
            <Image src={image} alt="character-1" />
          </div>
          <p className={Styles.characterName}>{name}</p>
          <Row>
            <Col>
              {Array.from({ length: star }, (_, i) => i).map((_, key) => (
                <Image
                  key={key}
                  className={Styles.star}
                  src={require('public/images/star.png')}
                  alt={`star-${key}`}
                  height={55}
                  width={65}
                />
              ))}
            </Col>
          </Row>
          <Row className={Styles.line} />
          <p>{description}</p>
          {maxim.map((item: any, key: number) => (
            <p key={key} className={Styles.maxim}>
              {item}
            </p>
          ))}
        </Col>
        <Col className={Styles.characterImg}>
          <Image src={background} alt="character-1-bg" layout="fill" objectFit="cover" />
          <Image src={image} alt="character-1" />
        </Col>
      </Row>
    </section>
  );
}
