import React, { useEffect, useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";

import Styles from "./Header.module.css";

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
            <Navbar light expand="md" className={Styles.navbar}>
                <NavbarBrand href="/">Gun Hunter</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="m-auto" navbar>
                        <NavItem className={Styles['nav-item']}>
                            <NavLink href="#features">Features</NavLink>
                        </NavItem>
                        <NavItem className={Styles['nav-item']}>
                            <NavLink href="#characters">Characters</NavLink>
                        </NavItem>
                        <NavItem className={Styles['nav-item']}>
                            <NavLink href="#tokenomics">Tokenomics</NavLink>
                        </NavItem>
                        <NavItem className={Styles['nav-item']}>
                            <NavLink href="#road-map">Road Map</NavLink>
                        </NavItem>
                        <NavItem className={Styles['nav-item']}>
                            <NavLink href="#whitepaper">Whitepaper</NavLink>
                        </NavItem>
                    </Nav>
                    <div className="d-flex">
                        <button>100 BNB Smart Chain</button>
                        <button>Connect Wallet</button>
                    </div>
                </Collapse>
            </Navbar>
        </header>
    );
}
