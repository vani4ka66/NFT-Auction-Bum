import React from "react"
import Container from "@mui/material/Container";
import styles from "./Avatar.module.scss";
import classNames from "classnames";


export default function Avatar({size, url, verified=false}) {
  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
        <div  className={classNames(styles.avatar)}>
            <img className="image" src="/images/avatar.png" alt="" />
            <img className="badge" src="/images/verified.svg" alt="" />
        </div>
      
    </Container>
  );
}

