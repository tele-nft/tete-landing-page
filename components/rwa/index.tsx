import { SVNBillo } from "fonts";
import styles from "./rwa.module.scss";
import Card from "./card";

const items = [
  { no: "001", image: "/images/rwa/cat_1.png" },
  { no: "002", image: "/images/rwa/cat_2.png" },
  { no: "003", image: "/images/rwa/cat_3.png" },
  { no: "004", image: "/images/rwa/cat_4.png" },
  { no: "005", image: "/images/rwa/cat_5.png" },
  { no: "006", image: "/images/rwa/cat_6.png" },
  { no: "007", image: "/images/rwa/cat_7.png" },
  { no: "008", image: "/images/rwa/cat_8.png" },
];

export default function RWA() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={`${SVNBillo.className} ${styles.main}`}>RWA</div>
        <div className={styles.sub}>(Coming Soon)</div>
      </div>
      <div className={styles.content}>
        {items.map(({ image, no }, index) => (
          <Card key={index} image={image} no={no} />
        ))}
      </div>
    </div>
  );
}
