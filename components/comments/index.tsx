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
            width={"279px"}
            height={"85px"}
            alt="say"
          />
        </div>
        <Image
          src={"/images/cat_comment.png"}
          width={"115px"}
          height={"144px"}
          alt="cat_comment"
        />
      </div>
      <div>
        <Carousel>
          {items.map(({ Images }, index) => (
            <div key={index} className={Styles.list}>
              {Images.map((image) => (
                <div key={image} className={Styles.item}>
                  <Image src={image} />
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
