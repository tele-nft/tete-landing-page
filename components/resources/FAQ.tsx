import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

import styles from "./FAQ.module.css";

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
        <AccordionItem>
          <AccordionHeader targetId="1">
            What is the Ticker of TELE?
          </AccordionHeader>
          <AccordionBody accordionId="1">TELE Ticker is $TELE</AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">
            Where can I buy TELE (TELE)?
          </AccordionHeader>
          <AccordionBody accordionId="2">
            For the time being, TELE is only available to buy on the
            teletoncoin.com website, we will be on multiple exchanges upon
            release.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">
            How do I claim my TELE tokens?
          </AccordionHeader>
          <AccordionBody accordionId="3">
            Anyone who purchased TELE tokens on the official site can claim
            their tokens at the end of the presale using the same wallet that
            was used to purchase. Details will be announced on official channels
            nearing the end of the fairlaunch in Q2 2024.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">How much Tax to buy ?</AccordionHeader>
          <AccordionBody accordionId="4">Zero taxes, LP locked</AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">
            Do you have customer service?
          </AccordionHeader>
          <AccordionBody accordionId="5">
            Yes we do! You can contact us using live chat, via our social media
            or simply fill in your details on our support page and one of the
            team will get back to you.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="6">
            Is there staking on TELE?
          </AccordionHeader>
          <AccordionBody accordionId="6">
            Yes there will be! We will announce the full details of the staking
            pool and rewards at the end of the fairlaunch.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
