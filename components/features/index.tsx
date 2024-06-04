import Image from "next/image";
import { Container } from "reactstrap";

import styles from "./features.module.css";

type props = {
  name: string;
  desc: string;
  icon: any;
};
function Item({ name, desc, icon }: Readonly<props>) {
  return (
    <div className={styles.item}>
      <div className={styles.icon}>
        <Image src={icon} />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
}

const data = [
  {
    icon: require("public/images/icons/totalsupply.png"),
    name: "Total Supply",
    desc: "100,000,000,000",
  },
  {
    icon: require("public/images/icons/circulating.png"),
    name: "Circulating Supply",
    desc: "100,000,000,000",
  },
  {
    icon: require("public/images/icons/locked.png"),
    name: "Liquidity Locked",
    desc: "We burn all LP tokens, therefore we cannot pull  liquidity.",
  },
  {
    icon: require("public/images/icons/reward.png"),
    name: "REWARD",
    desc: "Hold $TELE tokens and contribute to the gaming will receive airdrop and more rewards.",
  },
  {
    icon: require("public/images/icons/deflation.png"),
    name: "DEFLATION",
    desc: "$TELE will be bought back and burned halping to increase the value of the token.",
  },
];

export default function Features() {
  return (
    <section id="features">
      <Container>
        <div className={styles.list}>
          {data.map((item) => (
            <Item key={item.name} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
