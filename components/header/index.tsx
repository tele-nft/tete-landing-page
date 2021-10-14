import React, { useEffect, useState } from 'react';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import Image from 'next/image';

import Styles from './Header.module.css';

export default function Header() {
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
            <img className={Styles.logo} src="/images/logo.png" alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem className={Styles['nav-item']}>
                <NavLink className={Styles['nav-link']} href="#introduction">
                  Introduction
                </NavLink>
              </NavItem>
              <NavItem className={Styles['nav-item']}>
                <NavLink className={Styles['nav-link']} href="#ecosystem">
                  Ecosystem
                </NavLink>
              </NavItem>
              <NavItem className={Styles['nav-item']}>
                <NavLink className={Styles['nav-link']} href="#features">
                  Features
                </NavLink>
              </NavItem>
              <NavItem className={Styles['nav-item']}>
                <NavLink className={Styles['nav-link']} href="#characters">
                  Characters
                </NavLink>
              </NavItem>
              <NavItem className={Styles['nav-item']}>
                <NavLink className={Styles['nav-link']} href="#token-metrics">
                  Token Metrics
                </NavLink>
              </NavItem>
              <NavItem className={Styles['nav-item']}>
                <NavLink className={Styles['nav-link']} href="#road-map">
                  Road Map
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
