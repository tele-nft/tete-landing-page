import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';

const source = require('public/images/roadmap.png');

import Styles from './roadmap.module.css';
export default function RoadMap() {
  const [height, setHeight] = useState(source?.default?.height);
  const [width, setWidth] = useState(source?.default?.width);

  useEffect(() => {
    console.log(source);
    console.log(window);
    if (window) {
      setHeight((window.innerWidth * height) / width);
      setWidth(window.innerWidth);
    }
  }, []);
  return (
    <section id="road-map">
      <Image src={source} alt="tw" height={height} width={width} quality={100} />
    </section>
  );
}
