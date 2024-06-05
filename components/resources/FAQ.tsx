import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

import styles from "./FAQ.module.css";

const data = [
  {
    id: "1",
    header: "What is the Ticker of TELE?",
    body: "TELE Ticker is $TELE",
  },
  {
    id: "2",
    header: "Where can I buy TELE (TELE)?",
    body: "For the time being, TELE is only available to buy on the teletoncoin.com website, we will be on multiple exchanges upon release.",
  },
  {
    id: "3",
    header: "How do I claim my TELE tokens?",
    body: "Anyone who purchased TELE tokens on the official site can claim their tokens at the end of the presale using the same wallet that was used to purchase. Details will be announced on official channels nearing the end of the fairlaunch in Q2 2024.",
  },
  {
    id: "4",
    header: "How much Tax to buy?",
    body: "Zero taxes, LP locked",
  },
  {
    id: "5",
    header: "Do you have customer service?",
    body: "Yes we do! You can contact us using live chat, via our social media or simply fill in your details on our support page and one of the team will get back to you.",
  },
  {
    id: "6",
    header: "Is there staking on TELE?",
    body: "Yes there will be! We will announce the full details of the staking pool and rewards at the end of the fairlaunch.",
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
    <div className={styles.faq}>
      <Accordion flush open={open} toggle={toggle}>
        {data.map(({ id, header, body }) => (
          <AccordionItem key={id} className={styles.item}>
            <AccordionHeader targetId={id} className={styles["item-header"]}>
              {header}
            </AccordionHeader>
            <AccordionBody accordionId={id}>{body}</AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
