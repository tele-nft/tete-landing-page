import React from 'react';
import { Row, Col } from 'reactstrap';
import Image from 'next/image';

import Styles from './heros.module.css';

export default function CharacterSelection({
  data,
  handleSelect,
  select
}: {
  data: any;
  handleSelect: Function;
  select: number;
}) {
  return (
    <Row className={Styles.characterSelection}>
      {data.map((item: any, key: number) => (
        <Col
          className={select === key ? Styles.containAvatarSelect : Styles.containAvatar}
          key={key}
          onClick={() => handleSelect(key)}
        >
          <div className={Styles.avatar}>
            <Image src={item.background} alt="character-1-bg" layout="fill" objectFit="cover" />
            <Image src={item.image} alt="character-1" />
          </div>
          <p className={Styles.type}>{item.type}</p>
        </Col>
      ))}
    </Row>
  );
}
