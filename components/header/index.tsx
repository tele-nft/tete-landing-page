import React, { useEffect, useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

import Styles from "./Header.module.css";

export default function Header({ baseURL = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  };

  return (
    <header className={`${Styles.header} ${sticky ? Styles.sticky : ""}`}>
      <Navbar light expand="md" className={Styles.navbar} fixed="top">
        <NavbarBrand href="/" className={Styles.brand}>
          <img src="/images/logo.png" alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="m-auto">
            <NavItem className={Styles["nav-item"]}>
              <NavLink
                className={Styles["nav-link"]}
                href={`${baseURL}#introduction`}
              >
                Airdrop
              </NavLink>
            </NavItem>
            <NavItem className={Styles["nav-item"]}>
              <NavLink
                className={Styles["nav-link"]}
                href={`${baseURL}#features`}
              >
                Buy Now
              </NavLink>
            </NavItem>
            <NavItem className={Styles["nav-item"]}>
              <NavLink
                className={Styles["nav-link"]}
                href={`${baseURL}#characters`}
              >
                Game
              </NavLink>
            </NavItem>
            <NavItem className={Styles["nav-item"]}>
              <NavLink
                className={Styles["nav-link"]}
                href={`${baseURL}#token-metrics`}
              >
                Restaking
              </NavLink>
            </NavItem>
            <NavItem className={Styles["nav-item"]}>
              <NavLink
                className={Styles["nav-link"]}
                href={`${baseURL}#road-map`}
              >
                RWA
              </NavLink>
            </NavItem>
            <NavItem className={Styles["nav-item"]}>
              <NavLink className={Styles["button_wallet"]}>
                Connect Wallet
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}
