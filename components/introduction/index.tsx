import Image from "next/image";
import React from "react";

import Styles from "./introduction.module.scss";

export default function Introduction() {
  return (
    <section id="introduction" className={Styles.introduction}>
      <div>
        <div className={Styles.container}>
          <div className={Styles.image}>
            <div className={Styles.cover}></div>
            <Image
              src={"/images/cat.png"}
              width={508}
              height={548}
              alt=""
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
          <div className={Styles.content}>
            <div className={Styles.title}>
              What is
              <Image
                alt="teme_blue` "
                src={"/images/temetext_blue.png"}
                width={370}
                height={71}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
            <div>
              $TEME the most memeable game memecoin on TON Blockchain. TEME is
              for the people, alway community owned and managed and designed to
              make memeCoins great again. Zero taxes, LP locked, $TEME. Fueled
              by pure meme power, $TEME will lead the way.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
