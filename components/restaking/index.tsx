import { SVNBillo } from "fonts";
import styles from "./restaking.module.scss";
import React, { useEffect, useState } from "react";
import Arrow from "./arrrow.svg";
import Image from "next/image";
import IconArrow from "components/icons/arrow";

type Props = {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
};

function Tab({ children, isActive, onClick }: Props) {
  const [className, setClassName] = useState(styles.tab);

  useEffect(() => {
    if (isActive) {
      setClassName(`${styles.tab} ${styles.active}`);
    } else {
      setClassName(`${styles.tab}`);
    }
  }, [isActive]);

  return (
    <div className={`${SVNBillo.className} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}

function Tab0() {
  return (
    <div className={styles.restaking}>
      <div className={styles.text}>
        Start by staking BTC, ETH, TON and receive natively re-staked $TEME for
        superior rewards.
      </div>
      <div className={styles.content}>
        <div className={styles.item}>
          <Image
            src={"/images/restaking/item1.png"}
            width={317}
            height={156}
            alt=""
          />
          <div className={styles.text}>
            <div className={styles.header}>Stake BTC, ETH, TON</div>
            <div>Deposit your BTC, ETH or TON</div>
          </div>
        </div>
        <div className={styles.arrow}>
          <Arrow />
        </div>
        <div className={styles.item}>
          <Image src={"/images/logo.png"} width={156} height={156} alt="" />
          <div className={styles.text}>
            <div className={styles.header}>Get natively re-staked $TEME</div>
            <div>Earn staking rewards plus loyalty points and TEME points</div>
          </div>
        </div>
        <div className={styles.arrow}>
          <Arrow />
        </div>
        <div className={styles.item}>
          <Image
            src={"/images/restaking/item3.png"}
            width={305}
            height={156}
            alt=""
          />
          <div className={styles.text}>
            <div className={styles.header}>Maximise Returns</div>
            <div>
              Receive TEME and used it in the TEME ecosystem to receive more
              profits
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className={styles.liquid}>
      <div className={styles.text}>
        Add liquidity to TEME for a chance to receive more airdrops from
        projects in TEME&apos;s ecosystem
      </div>
      <button className={styles.button}>
        Add Liquid Now
        <IconArrow />
      </button>
    </div>
  );
}

function Tab2() {
  return (
    <div className={styles.rewards}>
      <div className={`${SVNBillo.className}`}>Coming Soon</div>
      <Image src={"/images/cat_rocket.png"} width={500} height={500} alt="" />
    </div>
  );
}

export default function ReStaking() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderContent = () => {
    if (selectedIndex == 2) {
      return <Tab2 />;
    }

    if (selectedIndex == 1) {
      return <Tab1 />;
    }

    return <Tab0 />;
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <Tab isActive={selectedIndex == 0} onClick={() => setSelectedIndex(0)}>
          Restaking
        </Tab>
        <Tab isActive={selectedIndex == 1} onClick={() => setSelectedIndex(1)}>
          Liquid TEME
        </Tab>
        <Tab isActive={selectedIndex == 2} onClick={() => setSelectedIndex(2)}>
          Rewards
        </Tab>
      </div>
      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
}
