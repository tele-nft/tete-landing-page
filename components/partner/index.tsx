import React from 'react';
import { Container } from 'reactstrap';
import Styles from './partner.module.css';
import PartnerImage from 'public/images/partner.svg';

export default function Partner() {
  return (
    <section id="partner" className={Styles.partner}>
      <Container>
        <PartnerImage />
      </Container>
    </section>
  );
}
