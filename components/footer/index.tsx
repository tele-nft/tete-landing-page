import React from "react";
import Link from "next/link";

import Styles from "./footer.module.css";

export default function Footer() {
  return (
    <section id="privace" className={Styles.footer}>
      <div className="section black">
        <div className="container">
          <div className="div-block-2">
            <p
              data-w-id="cce639c3-4147-fc63-0e56-76b5e528e62c"
              className="yellow"
            >
              Follow us on
            </p>
            <br />
            <div
              data-w-id="b80a8957-8d10-2ff8-6e29-17f4a62bedea"
              className="divsocialicons"
            >
              <a
                href="http://t.me/GunHunterNftOfficial "
                target="_blank"
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
                className={Styles.social}
              >
                <img
                  src="/images/legal/instagram-image.svg"
                  loading="lazy"
                  alt=""
                  className="iconsocial"
                />
              </a>
              <a
                href="https://gunhunternft.gitbook.io/whitepaper"
                target="_blank"
                className={Styles.social}
              >
                <img
                  src="/images/legal/m-image.svg"
                  loading="lazy"
                  alt=""
                  className="iconsocial"
                />
              </a>
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
            <Link href="/privace-policy">
              <a className={Styles.link}>Terms of Service</a>
            </Link>

            <Link href="/privace-policy">
              <a className={Styles.link}>Privacy Policy</a>
            </Link>

            {/* <a
              href="/"
              aria-current="page"
              className="link sub-menu w--current"
            >
              {" "}
             
            </a> */}
          </div>
          <div
            data-w-id="cce639c3-4147-fc63-0e56-76b5e528e640"
            className="div-addresslogo hide"
          ></div>
        </div>
      </div>
    </section>
  );
}
