import { SVNBillo } from 'fonts';
import Image from 'next/image';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

import Styles from './comments.module.scss';

const items = [
  {
    Images: [
      {
        img: require("public/images/comments/comment_1.png"),
        url: "https://x.com/Cypto_Dao/status/1800824889504678157",
      },
      {
        img: require("public/images/comments/comment_2.png"),
        url: "https://x.com/ChinaWhalesPump/status/1800827000124572052",
      },
      {
        img: require("public/images/comments/comment_3.png"),
        url: "https://x.com/Cypto_Dao/status/1800828931886707037",
      },
    ],
  },
];

export default function Comments() {
  return (
    <section id="comments" className={Styles.comments}>
      <div className={`${SVNBillo.className} ${Styles.title}`}>
        <div className={Styles.text}>
          Kol say <span>teme</span>
        </div>
        <Image
          src={"/images/cat_comment.png"}
          width={115}
          height={144}
          alt="cat_comment"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <div>
        <Carousel>
          {items.map(({ Images }, index) => (
            <div key={`item${index}`} className={Styles.list}>
              {Images.map(({ url, img }, index) => (
                <a
                  key={`image_${index}`}
                  className={Styles.item}
                  href={url}
                  target="_blank"
                >
                  <Image
                    src={img}
                    alt=""
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </a>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
      <div className={Styles.ellipse}></div>
    </section>
  );
}
