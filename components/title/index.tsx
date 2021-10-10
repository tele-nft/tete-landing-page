import React from "react";

import Style from "./title.module.css";

export default function Title(props: { text: string }) {
    return <div className={Style.title}>{props.text}</div>;
}
