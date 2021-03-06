import React, { useState } from "react"
import Container from "@mui/material/Container";
import styles from "./Avatar.module.scss";
import classNames from "classnames";


export default function Avatar({size=90, url="/images/avatar.png", verified=false}) {

    const [width, setWidth] = useState(90)
    const [height, setHeight] = useState(90)

  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
        <div className="avatar" >
        <img width={size} height={size} className={classNames(styles.image)} src={url} alt="" />
            {verified && <img className="badge" src="/images/verified.svg" alt="" />}
        </div>
      
    </Container>
  );
}