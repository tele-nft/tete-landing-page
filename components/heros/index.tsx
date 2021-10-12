import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';

import Title from '../title';
import Styles from './heros.module.css';

export default function Heros() {
  return (
    <section id="characters" className={Styles.characters}>
      <Container>
        <Row>
          <Title text="characters" />
        </Row>
        <Row>
          <Col>
            <div className={Styles.avatar}>
              <Image
                src={require('public/images/character-1-bg.png')}
                alt="character-1-bg"
                layout="fill"
                objectFit="cover"
              />
              <Image src={require('public/images/character-1.png')} alt="character-1" />
            </div>
            <Row>
              <Col>
                <Image
                  className={Styles.star}
                  src={require('public/images/star.png')}
                  alt="star-1"
                  height={60}
                  width={60}
                />
                <Image
                  className={Styles.star}
                  src={require('public/images/star.png')}
                  alt="star-2"
                  height={60}
                  width={60}
                />
                <Image
                  className={Styles.star}
                  src={require('public/images/star.png')}
                  alt="star-2"
                  height={60}
                  width={60}
                />
              </Col>
            </Row>
            <p className={Styles.characterName}>DAKOTA FRAY</p>
            <p>
              A western cowboy lady who can knock down all the obstacles with her two guns. Be careful! She is not as
              friendly as you think. <br />
              "Wanna kill me? Ask my guns." <br />
              "We all know that I am the best."
            </p>
          </Col>
          <Col className={Styles.characterImg}>
            <Image
              src={require('public/images/character-1-bg.png')}
              alt="character-1-bg"
              layout="fill"
              objectFit="cover"
            />
            <Image src={require('public/images/character-1.png')} alt="character-1" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
