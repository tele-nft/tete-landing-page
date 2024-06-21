import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

import styles from "./FAQ.module.scss";
import Image from "next/image";

const data = [
  {
    id: "1",
    header: "What is the Ticker of TEME?",
    body: "TEME Ticker is $TEME",
  },
  {
    id: "2",
    header: "How does TEME reform memes? ",
    body: "Most meme coins have no application at all, they are mainly just for entertainment purposes. But TEME is at the forefront of applying memes into practice by connecting the blockchain network through memes and digitizing real assets, specifically toys released on TEME. Opening up an extremely potential and full era prospects .",
  },
  {
    id: "3",
    header: "Where can I buy TEME ($TEME)?",
    body: "TEME is only available to buy on the temecoin.xyz website, We will notify to you on the official social when $TEME release.",
  },
  {
    id: "4",
    header: "How do I claim my $TEME tokens?",
    body: "Play games on telegram to receive TEME tokens or anyone who purchased TEME tokens on the official site can claim their tokens at the end of the presale using the same wallet that was used to purchase. Details will be announced on official channels nearing the end of the release in Q3 2024.",
  },
  {
    id: "5",
    header: "How much Tax to buy ?",
    body: "Zero taxes, LP locked",
  },
  {
    id: "6",
    header: "Is there staking on TEME?",
    body: "Yes there will be! We will announce the full details of the staking pool and rewards at the end of the fairlaunch.",
  },
  {
    id: "7",
    header: "What is the RWA on TEME ?",
    body: "Real World Asset (RWA) on TEME will bring together toy collectors, artists and brands. We will release toy figures in collaboration with artists and brands, It will be a vibrant community connected through $TEME.",
  },
  {
    id: "8",
    header: "Do you have customer service?",
    body: "Yes we do! You can contact us using live chat, via our social media or simply fill in your details on our support page and one of the team will get back to you.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState("");
  const toggle = (id: string) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <Image
          src="/images/faq_cat.png"
          width={518.072}
          height={624.111}
          alt="faq_cat"
        />
        <div className={styles.content}>
          <div className={styles.title}>
            <Image src={"/images/faq.png"} width={194} height={129} alt="faq" />
          </div>
          <Accordion flush open={open} toggle={toggle} className={styles.items}>
            {data.map(({ id, header, body }) => (
              <AccordionItem key={id} className={styles.item}>
                <AccordionHeader
                  targetId={id}
                  className={styles["item-header"]}
                >
                  {header}
                </AccordionHeader>
                <AccordionBody accordionId={id} className={styles["item-body"]}>
                  {body}
                </AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
