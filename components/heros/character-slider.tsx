import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';

import Character from './character';
import Styles from './heros.module.css';
import CharacterSelection from './character-selection';

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
      <CharacterSelection {...{ data, select, handleSelect }} />
      <Carousel className={Styles.carousel} autoPlay={false} index={select} onChange={handleChange}>
        {data.map((item: any, key: number) => (
          <Character key={key} {...{ ...item }} />
        ))}
      </Carousel>
    </div>
  );
}
