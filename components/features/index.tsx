import Image from "next/image";
import { Container } from "reactstrap";

import styles from "./features.module.css";

const images = [
  require("public/images/features/feature1.png"),
  require("public/images/features/feature2.png"),
  require("public/images/features/feature3.png"),
  require("public/images/features/feature4.png"),
  require("public/images/features/feature5.png"),
];

export default function Features() {
  return (
    <section id="features">
      <Container>
        <div className={styles.list}>
          {images.map((url, index) => (
            <div key={index} className={styles.item}>
              <Image src={url} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
