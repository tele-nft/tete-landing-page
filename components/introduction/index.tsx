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
            We are reshaping the meme era!
            <br />
            TEME is powered By AI Technology, meme coin Gaming, Restaking & Real
            World Asset (RWA). Buy upgrades, complete quests, invite friends and
            become the pioneer Set To DOMINATE All Memes!
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
