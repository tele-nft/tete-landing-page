import { SVNBillo } from "fonts";
import styles from "./coming-soon.module.scss";
import Image from "next/image";
export default function ComingSoon() {
  return (
    <div className={styles.container}>
      <div className={`${SVNBillo.className} ${styles.text}`}>Coming Soon</div>
      <div className={styles.image}>
        <Image src={"/images/cat_rocket.png"} width={600} height={600} alt="" />
      </div>
    </div>
  );
}
