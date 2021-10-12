import React from 'react';
import Carousel from 'react-material-ui-carousel';

import Character from './character';
import Styles from './heros.module.css';

export default function CharacterSlider({ data }: { data: any }) {
  return (
    <Carousel className={Styles.carousel} interval={2000}>
      {data.map((item: any, key: number) => (
        <Character key={key} {...{ ...item }} />
      ))}
    </Carousel>
  );
}
