import Image from "next/image";
import React from "react";
import Styles from "./heros.module.scss";

const data = [
  require("public/images/heros/hero1.png"),
  require("public/images/heros/hero2.png"),
  require("public/images/heros/hero3.png"),
  require("public/images/heros/hero4.png"),
  require("public/images/heros/hero5.png"),
  require("public/images/heros/hero6.png"),
];

export default function Heros() {
  return (
    <section id="characters" className={Styles.heros}>
      <div className={Styles.ellipse1}></div>
      <div className={Styles.ellipse2}></div>
      <div className={Styles.title}>
        <Image
          src={"/images/claim_nft.png"}
          width={"517px"}
          height={"129px"}
          alt="claim_nft"
        />
        <button className={Styles["btn-claim"]}>Claim NFT</button>
      </div>
    </section>
  );
}
