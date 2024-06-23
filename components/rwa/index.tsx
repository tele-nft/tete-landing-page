import { SVNBillo } from "fonts";
import styles from "./rwa.module.scss";
import Card from "./card";

const items = [
  { image: "/images/rwa/cat_1.png" },
  { image: "/images/rwa/cat_2.png" },
  { image: "/images/rwa/cat_3.png" },
  { image: "/images/rwa/cat_4.png" },
  { image: "/images/rwa/cat_5.png" },
  { image: "/images/rwa/cat_6.png" },
  { image: "/images/rwa/cat_7.png" },
  { image: "/images/rwa/cat_8.png" },
];

export default function RWA() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={`${SVNBillo.className} ${styles.main}`}>SWA</div>
        <div className={styles.sub}>(Coming Soon)</div>
      </div>
      <div className={styles.content}>
        {items.map(({ image }, index) => (
          <Card key={index} image={image} />
        ))}
      </div>
    </div>
  );
}
