import Image from "next/image";
import React from "react";
import Grid from "./grid.svg";

import styles from "./roadmap.module.scss";

const phases = [
  {
    title: require("public/images/roadmap/phase_1.png"),
    items: [
      { checked: true, value: "Initialize website" },
      { checked: true, value: "Marketing $TEME" },
      { checked: true, value: "Build basic game" },
      { checked: false, value: "Referral system" },
    ],
  },
  {
    title: require("public/images/roadmap/phase_2.png"),
    items: [
      { checked: false, value: "Basic game start" },
      { checked: false, value: "Airdrop start" },
      { checked: false, value: "Earn tasks" },
      { checked: false, value: "Level up TEME" },
      { checked: false, value: "More task update" },
    ],
  },
  {
    title: require("public/images/roadmap/phase_3.png"),
    items: [
      { checked: false, value: "Build game TEME official" },
      { checked: false, value: "Wallet in-game implementation" },
      { checked: false, value: "TGE" },
      { checked: false, value: "Token in-game utility launch" },
      { checked: false, value: "Distribution Airdrop" },
      { checked: false, value: "Marketing with partner" },
    ],
  },
  {
    title: require("public/images/roadmap/phase_4.png"),
    items: [
      { checked: false, value: "Major Exchange listing" },
      { checked: false, value: "100,000 Holders" },
      { checked: false, value: "Build Restaking to Earn" },
      { checked: false, value: "Open Restaking to Earn" },
      { checked: false, value: "Build network for TEME blockchain" },
    ],
  },
  {
    title: require("public/images/roadmap/phase_5.png"),
    items: [
      {
        checked: false,
        value: "Release TEME multi-chain connection protocol network",
      },
      { checked: false, value: "Build RWA for TEME" },
      { checked: false, value: "Open RWA for TEME" },
      { checked: false, value: "Complete TEME takeover of the meme market." },
    ],
  },
];

function Bullet({ checked }: { checked: boolean }) {
  if (checked) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="#59D2F9"
      >
        <rect width="20" height="20" rx="10" fill="#59D2F9" />
        <path
          d="M17 7.65041L15.1803 6L9.67904 11.5935L5.7181 8.00813L4 9.7561L9.7806 15L17 7.65041Z"
          fill="white"
        />
      </svg>
    );
  }
  return <div className={styles.bullet}></div>;
}

export default function RoadMap() {
  return (
    <section id="road-map" className={styles["road-map"]}>
      <div className={styles.grid}>
        <Grid />
      </div>
      <div className={styles.title}>
        <Image
          src={"/images/roadmap.png"}
          width={485}
          height={129}
          alt="roadmap"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className={styles.phases}>
        {phases.map(({ title, items }, index) => (
          <div key={index} className={styles.phase}>
            <Image
              src={title}
              alt={`phase${index}`}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <div className={styles.line}></div>
            <div className={styles.content}>
              {items?.map(({ checked, value }, index) => (
                <div key={index} className={styles.item}>
                  <Bullet checked={checked} />
                  <div className={styles.text}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className={styles.cat}>
          <Image
            src={"/images/roadmap/cat.png"}
            alt="rm01"
            fill
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
