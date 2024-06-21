import React from "react";
import Image from "next/image";

import Styles from "./footer.module.scss";
import { Socials } from "config";

export default function Footer() {
  return (
    <footer>
      <div className={Styles.footer}>
        <div className={Styles.inner}>
          {Socials.map(({ img }, index) => (
            <a href="#" key={index}>
              <Image src={img} width={80} height={80} alt={`social_${index}`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
