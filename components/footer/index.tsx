import React from "react";
import Image from "next/image";

import Styles from "./footer.module.scss";
import { Socials } from "config";

export default function Footer() {
  return (
    <footer>
      <div className={Styles.footer}>
        <div className={Styles.inner}>
          {Socials.map(({ img, url }, index) => (
            <a href={url} key={index} target="_blank">
              <Image
                src={img}
                width={80}
                height={80}
                alt={`social_${index}`}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
