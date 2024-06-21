import IconWallet from "components/icons/wallet";
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

import Styles from "./Header.module.scss";
import Image from "next/image";

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
    <header className={`${Styles.header}`}>
      <Navbar light expand="md" className={Styles.navbar}>
        <NavbarBrand href="/" className={Styles.brand}>
          <Image src="/images/logo.png" alt="logo" width={80} height={80} />
          <div className={Styles.name}>TEME</div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={`${Styles.nav}`} navbar>
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
          </Nav>
        </Collapse>
        <button className={`btn ${Styles["button_wallet"]}`} type="button">
          Connect Wallet <IconWallet />
        </button>
      </Navbar>
    </header>
  );
}
