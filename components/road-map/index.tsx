import Title from "components/title";
import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";

import Styles from "./roadmap.module.css";

// import RoadMapImage from "public/images/roadmap.svg";
export default function RoadMap() {
    return (
        <section id="road-map">
            <Container>
                <Title text="road map" />
                <div className={Styles.items}>
                    <div className={`${Styles.item} ${Styles.item1}`}>
                        <div className={Styles.head}>
                            <p className={Styles.title}>Phase 1</p>
                        </div>
                        <div className={Styles.content}>
                            <div className={Styles.line}>
                                <span></span>
                            </div>
                            <div className={Styles.point}>
                                <span></span>
                            </div>
                            <div className={Styles.desc}>
                                Story idea, characters and game built
                                <br />
                                Release Website version 1<br />
                                Audit Smart Contract
                                <br />
                                Marketing to spread awareness
                                <br />
                                Test Beta Game Version
                                <br />
                                Open Official Game Version 1
                            </div>
                        </div>
                    </div>
                    <div className={`${Styles.item} ${Styles.item2}`}>
                        <div className={Styles.head}>
                            <p className={Styles.title}>Phase 2</p>
                        </div>
                        <div className={Styles.content}>
                            <div className={Styles.line}>
                                <span></span>
                            </div>
                            <div className={Styles.point}>
                                <span></span>
                            </div>
                            <div className={Styles.desc}>
                                Update Website Version 2<br />
                                PreSale in PinkSale
                                <br />
                                Public Launch On PancakeSwap
                                <br />
                                Listing on Pancakeswap
                                <br />
                                Release Official game Play To Earn
                                <br />
                                Listing on Coinmarketcap and Coingecko
                            </div>
                        </div>
                    </div>
                    <div className={`${Styles.item} ${Styles.item3}`}>
                        <div className={Styles.head}>
                            <p className={Styles.title}>Phase 3</p>
                        </div>
                        <div className={Styles.content}>
                            <div className={Styles.line}>
                                <span></span>
                            </div>
                            <div className={Styles.point}>
                                <span></span>
                            </div>
                            <div className={Styles.desc}>
                                Run marketing program
                                <br />
                                Open NFT market
                                <br />
                                GunhunterNFT (GHF) exchange on the OpenSea
                                <br />
                                Release Farming, Battle (PvE) features
                                <br />
                                Release maps for Mobile Game (PvP)
                            </div>
                        </div>
                    </div>
                    <div className={`${Styles.item} ${Styles.item4}`}>
                        <div className={Styles.head}>
                            <p className={Styles.title}>Phase 4</p>
                        </div>
                        <div className={Styles.content}>
                            <div className={Styles.line}>
                                <span></span>
                            </div>
                            <div className={Styles.point}>
                                <span></span>
                            </div>
                            <div className={Styles.desc}>
                                CEXs listing Hotbit , Mxc, Gate...
                                <br />
                                Expand partnerships, run marketing programs
                                <br />
                                Upgrade the game (characters, equipments, features,...)
                                <br />
                                Merge and evolve Pets
                                <br />
                                Weapons exchange shop in Mobile Game (PvP)
                            </div>
                        </div>
                    </div>
                    <div className={`${Styles.item} ${Styles.item5}`}>
                        <div className={Styles.head}>
                            <p className={Styles.title}>Phase 5</p>
                        </div>
                        <div className={Styles.content}>
                            <div className={Styles.line}>
                                <span></span>
                            </div>
                            <div className={Styles.point}>
                                <span></span>
                            </div>
                            <div className={Styles.desc}>
                                Release Dapp Mobile Games in iOs and Android
                                <br />
                                Ranking tournament with many prizes
                                <br />
                                Fighting Upgrade (PvE) - Reduce gas fees and integrate new function
                                <br />
                                Build GunHunter Swap Decentralized Exchange – DEX
                                <br />
                                Building NFT multi-chain connection protocol for metaverse networks
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
