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
import { SVNBillo } from "fonts";

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
          <Image
            src="/images/logo.png"
            alt="logo"
            width={80}
            height={80}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <div className={`${SVNBillo.className} ${Styles.name}`}>TEME</div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={`m-auto ${Styles.nav}`} navbar>
            <NavItem className={Styles["nav-item"]}>
              <NavLink className={Styles["nav-link"]} href="/airdrop">
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
        <button className={`${Styles["button_wallet"]}`} type="button">
          Connect Wallet <IconWallet />
        </button>
      </Navbar>
    </header>
  );
}
