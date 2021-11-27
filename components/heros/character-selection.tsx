import Image from "next/image";
import React from "react";

import Styles from "./heros.module.css";

export default function CharacterSelection({ data, handleSelect, select }: { data: any; handleSelect: Function; select: number }) {
    return (
        <div className={Styles.characterSelection}>
            {data.map((item: any, key: number) => (
                <div className={Styles.selectionItem} key={key} onClick={() => handleSelect(key)}>
                    <Image src={item.avatar} alt="character-1-bg" />
                </div>
            ))}
        </div>
    );
}
