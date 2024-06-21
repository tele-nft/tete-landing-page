import Image from "next/image";
import React from "react";
import Carousel from "react-material-ui-carousel";

import Styles from "./comments.module.scss";

const items = [
  {
    Images: [
      require("public/images/comments/comment_1.png"),
      require("public/images/comments/comment_2.png"),
      require("public/images/comments/comment_3.png"),
    ],
  },
];

export default function Comments() {
  return (
    <section id="comments" className={Styles.comments}>
      <div className={Styles.title}>
        <div className={Styles.text}>
          Kol say
          <Image
            src={"/images/temetext_blue.png"}
            width={279}
            height={85}
            alt="say"
          />
        </div>
        <Image
          src={"/images/cat_comment.png"}
          width={115}
          height={144}
          alt="cat_comment"
        />
      </div>
      <div>
        <Carousel>
          {items.map(({ Images }, index) => (
            <div key={`item${index}`} className={Styles.list}>
              {Images.map((image, index) => (
                <div key={`image_${index}`} className={Styles.item}>
                  <Image src={image} alt="" />
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
