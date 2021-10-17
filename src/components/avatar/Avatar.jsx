import React from "react"
import Container from "@mui/material/Container";
import styles from "./Avatar.module.scss";
import classNames from "classnames";


export default function Avatar({size="90px", url, verified=false}) {
  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
        <div width={size}  height={size}  className="avatar">
            <img className="image" src="/images/avatar.png" alt="" />
            {verified && <img className="badge" src="/images/verified.svg" alt="" />}
        </div>
      
    </Container>
  );
}

