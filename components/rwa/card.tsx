import Image from "next/image";
import styles from "./card.module.scss";
import { SVNBillo } from "fonts";
import ShoppingCart from "./shopping-cart.svg";
import Dollar from "./dollar.svg";
import TON from "./ton.svg";

type Props = {
  image: string;
};

export default function Card({ image }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <Image src={"/images/logo.png"} width={50} height={50} alt="" />
        <div className={styles.info}>
          <div className={`${SVNBillo.className} ${styles.name}`}>
            Teme toys
          </div>
          <div className={styles.no}>#0001</div>
        </div>
      </div>
      <div className={styles.center}>
        <Image src={image} width={239} height={239} alt="" />
        <div className={styles.prices}>
          <div className={styles.coin}>
            <Image src={"/images/ton.png"} width={24} height={24} alt="" />
            <span>100.00</span>
          </div>
          /
          <div className={styles.coin}>
            <Image src={"/images/logo.png"} width={24} height={24} alt="" />
            <span>200.00</span>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.cart}>
          <ShoppingCart />
        </div>
        <button className={styles.button}>Buy Now</button>
      </div>
      <div className={styles.dollar}>
        <Dollar />
        <TON />
      </div>
    </div>
  );
}
