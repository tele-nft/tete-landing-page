import React from 'react';
import { Container, Row } from 'reactstrap';
import Image from 'next/image';

import Title from '../title';
import Styles from './token-metrics.module.css';

export default function TokenMetrics() {
  return (
    <section id="token-metrics" className={Styles['token-metrics']}>
      <Container>
        <Row className="d-flex flex-column align-items-center">
          <Title text="Token Metrics" />
          <Image src={require('public/images/token-metrics.png')} alt="token" />
        </Row>
      </Container>
    </section>
  );
}
