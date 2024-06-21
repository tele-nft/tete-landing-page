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
          width={517}
          height={129}
          alt="claim_nft"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
        <button className={Styles["btn-claim"]}>Claim NFT</button>
      </div>
      <div className={Styles["loop_wrap"]}>
        <ul>
          {data.map((image, index) => (
            <li key={`1${index}`}>
              <a href="#">
                <Image
                  src={image}
                  width={300}
                  height={300}
                  alt=""
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </a>
            </li>
          ))}
        </ul>
        <ul>
          {data.map((image, index) => (
            <li key={`2${index}`}>
              <a href="#">
                <Image
                  src={image}
                  width={300}
                  height={300}
                  alt=""
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
