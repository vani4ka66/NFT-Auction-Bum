import React, { useState } from "react"
import Container from "@mui/material/Container";
import styles from "./Collector.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";
import User from "../user/User"


export default function Collector({name, nftsCount, avatar, verified, id, type}) {
       
  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
         <Grid container className={type} spacing={2}>
            <Grid item xs={2}>
                <div >{nftsCount}</div>
            </Grid >

            <Grid item xs={10}>
               <User />
            </Grid >
        </Grid>
    </Container>
  );
}