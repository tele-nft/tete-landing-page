import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from 'reactstrap';

import Styles from './Header.module.css';

export default function Header({ baseURL = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  };

  return (
    <header className={`${Styles.header} ${sticky ? Styles.sticky : ''}`}>
      <Navbar light expand="md" className={Styles.navbar} fixed="top">
        <Container>
          <NavbarBrand href="/" className={Styles.brand}>
            <img className={Styles.logo} src="/images/logo_text.png" alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem className={Styles['nav-item']}>
                <NavLink className={Styles['nav-link']} href={`${baseURL}#introduction`}>
                  Introduction
                </NavLink>
              </NavItem>
              <NavItem className={Styles['nav-item']}>
                <NavLink className={Styles['nav-link']} href={`${baseURL}#ecosystem`}>
                  Ecosystem
                </NavLink>
              </NavItem>
              <NavItem className={Styles['nav-item']}>
                <NavLink className={Styles['nav-link']} href={`${baseURL}#features`}>
                  Features
                </NavLink>
              </NavItem>
              <NavItem className={Styles['nav-item']}>
                <NavLink className={Styles['nav-link']} href={`${baseURL}#characters`}>
                  Characters
                </NavLink>
              </NavItem>
              <NavItem className={Styles['nav-item']}>
                <NavLink className={Styles['nav-link']} href={`${baseURL}#token-metrics`}>
                  Token Metrics
                </NavLink>
              </NavItem>
              <NavItem className={Styles['nav-item']}>
                <NavLink className={Styles['nav-link']} href={`${baseURL}#road-map`}>
                  Road Map
                </NavLink>
              </NavItem>
              <NavItem className={Styles['nav-item']}>
                <NavLink
                  className={Styles['nav-link']}
                  target="_blank"
                  href="https://www.pinksale.finance/#/launchpad/0x30186923A41eC8541a59C20a88dc0001310AC2E6?chain=BSC"
                >
                  Presale
                </NavLink>
              </NavItem>
              <NavItem className={Styles['nav-item']}>
                <NavLink className={Styles['nav-link']} href="https://play.gunhunternft.net/">
                  Play Now
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
