import React, { useState } from "react"
import Container from "@mui/material/Container";
import styles from "./Avatar.module.scss";
import classNames from "classnames";


export default function Avatar({size="90", url="/images/avatar.png", verified=false}) {

    // const [width, setWidth] = useState(size)
    // const [height, setHeight] = useState(size)

    // setWidth("500")


  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
        <div className="avatar" >
            <img width={size} height={size} className="image" src={url} alt="" />
            {verified && <img className="badge" src="/images/verified.svg" alt="" />}
        </div>
      
    </Container>
  );
}

