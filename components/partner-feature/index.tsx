import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Styles from './partner-feature.module.css';
import Image from 'next/image';

export default function PartnerFeature() {
  return (
    <section id="partner-feature" className={Styles.partnerFeature}>
      <Container>
        <Image src={require('public/images/partner-feature.jpg')} />
      </Container>
    </section>
  );
}
