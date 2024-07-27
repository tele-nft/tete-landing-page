import IconWallet from "components/icons/wallet";
import { SVNBillo } from "fonts";
import Image from "next/image";
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
import MenuLink from "./menu-link";

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
            <MenuLink href="/">Home</MenuLink>
            <MenuLink href="/airdrop">Airdrop</MenuLink>
            <MenuLink href="https://t.me/temecoin_bot" target="_blank">
              Game
            </MenuLink>
            <MenuLink href="/restaking">Restaking</MenuLink>
            <MenuLink href="/rwa">RWA</MenuLink>
            <button className={`${Styles["button_wallet"]}`} type="button">
              Connect Wallet <IconWallet />
            </button>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}
