import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';

import Character from './character';
import Styles from './heros.module.css';

export default function CharacterSlider({ data }: { data: any }) {
  const [select, setSelect] = useState(0);

  const handleSelect = (index: number) => {
    setSelect(index);
  };

  const handleChange = (index: number) => {
    if (select !== index) setSelect(index);
  };

  return (
    <div className={Styles.characterSlider}>
      <Row className={Styles.characterSliderContain}>
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
      <Carousel className={Styles.carousel} autoPlay={false} index={select} onChange={handleChange}>
        {data.map((item: any, key: number) => (
          <Character key={key} {...{ ...item }} />
        ))}
      </Carousel>
    </div>
  );
}
