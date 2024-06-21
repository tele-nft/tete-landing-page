import Image from "next/image";
import React from "react";

import Styles from "./introduction.module.scss";
import { SVNBillo } from "fonts";

export default function Introduction() {
  return (
    <section id="introduction" className={Styles.introduction}>
      <div className={Styles.container}>
        <div className={Styles.image}></div>
        <div className={Styles.content}>
          <div className={`${SVNBillo.className} ${Styles.title}`}>
            What is
            <Image
              alt="teme_blue` "
              src={"/images/temetext_blue.png"}
              width={370}
              height={71}
              style={{
                width: "370px",
                height: "94px",
              }}
            />
          </div>
          <div>
            $TEME the most memeable game memecoin on TON Blockchain. TEME is for
            the people, alway community owned and managed and designed to make
            memeCoins great again. Zero taxes, LP locked, $TEME. Fueled by pure
            meme power, $TEME will lead the way.
          </div>
        </div>
        <div className={Styles.cat}>
          <Image
            src={"/images/cat.png"}
            width={508}
            height={548}
            alt=""
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
}
