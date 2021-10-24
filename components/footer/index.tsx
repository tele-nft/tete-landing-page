import React from "react";
import Link from "next/link";
import Image from "next/image";

import Styles from "./footer.module.css";

export default function Footer() {
  return (
    <section id="privace" className={Styles.footer}>
      <div className="section black">
        <div className="container">
          <div className="div-block-2">
            <p
              data-w-id="cce639c3-4147-fc63-0e56-76b5e528e62c"
              className={Styles.follow}
            >
              Follow us on
            </p>
            <div
              data-w-id="b80a8957-8d10-2ff8-6e29-17f4a62bedea"
              className="divsocialicons"
            >
              <a
                href="http://t.me/GunHunterNftOfficial "
                target="_blank"
                rel="noreferrer"
                className={Styles.social}
              >
                <img
                  src="/images/legal/telegram-image.svg"
                  loading="lazy"
                  alt=""
                  className="iconsocial"
                />
              </a>

              <a
                href="https://discord.gg/9hVZWjMK6y"
                target="_blank"
                rel="noreferrer"
                className={Styles.social}
              >
                <img
                  src="/images/legal/discord-image.svg"
                  loading="lazy"
                  alt=""
                  className="iconsocial"
                />
              </a>
              <a
                href="https://twitter.com/GunHunterNFT"
                target="_blank"
                rel="noreferrer"
                className={Styles.social}
              >
                <img
                  src="/images/legal/twitter-image.svg"
                  loading="lazy"
                  alt=""
                  className="iconsocial"
                />
              </a>
              <a
                href="https://www.facebook.com/GunHunter-NFT-102296442234796"
                target="_blank"
                rel="noreferrer"
                className={Styles.social}
              >
                <img
                  src="/images/legal/facebook-image.svg"
                  loading="lazy"
                  alt=""
                  className="iconsocial"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCZBYirzX--pcuGrG69R6XwA"
                target="_blank"
                rel="noreferrer"
                className={Styles.social}
              >
                <img
                  src="/images/legal/youtube-image.svg"
                  loading="lazy"
                  alt=""
                  className="iconsocial"
                />
              </a>
              <a
                href="http://t.me/GunHunterChannel"
                target="_blank"
                rel="noreferrer"
                className={Styles.social}
              >
                <img
                  src="/images/legal/instagram-image.svg"
                  loading="lazy"
                  alt=""
                  className="iconsocial"
                />
              </a>
              {/* <a
                // href="https://gunhunternft.gitbook.io/whitepaper"
                target="_blank"
                rel="noreferrer"
                className={Styles.social}
              >
                <img
                  src="/images/legal/m-image.svg"
                  loading="lazy"
                  alt=""
                  className="iconsocial"
                />
              </a> */}
            </div>
          </div>
          <div
            data-w-id="cce639c3-4147-fc63-0e56-76b5e528e636"
            className="delimitationbar"
          ></div>

          <div
            data-w-id="cce639c3-4147-fc63-0e56-76b5e528e637"
            className={Styles.submenu}
          >
            <div>
              <Link href="/term-services">
                <a className={Styles.link}>Terms of Service</a>
              </Link>
              <Link href="/privace-policy">
                <a className={Styles.link}>Privacy Policy</a>
              </Link>
            </div>
            <Link href="https://docs.gunhunternft.us/">
              <a target="_blank">
                <img
                  className={Styles.whitepaperImg}
                  src={"/images/whitepaper.png"}
                />
                <span>GunHunterNFT Whitepaper</span>
              </a>
            </Link>
          </div>

          <div>
            <p className={Styles.textCopy}>
              Copyright &#9400; 2021 by GunHunterNFT{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
