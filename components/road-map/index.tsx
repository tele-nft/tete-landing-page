import Image from "next/image";
import React from "react";

import styles from "./roadmap.module.scss";

const phases = [
  { title: require("public/images/roadmap/phase_1.png") },
  { title: require("public/images/roadmap/phase_2.png") },
  { title: require("public/images/roadmap/phase_3.png") },
  { title: require("public/images/roadmap/phase_4.png") },
  { title: require("public/images/roadmap/phase_5.png") },
];

export default function RoadMap() {
  return (
    <section id="road-map" className={styles["road-map"]}>
      <div className={styles.title}>
        <Image
          src={"/images/roadmap.png"}
          width={"485px"}
          height={"129px"}
          alt="roadmap"
        />
      </div>
      <div className={styles.phases}>
        {phases.map(({ title }, index) => (
          <div key={index} className={styles.phase}>
            <Image src={title} alt={`phase${index}`} />
            <div className={styles.line}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
