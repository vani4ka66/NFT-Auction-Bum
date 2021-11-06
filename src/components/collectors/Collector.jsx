import React, { useState } from "react"
import Container from "@mui/material/Container";
import styles from "./Collector.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";
import User from "../user/User"


export default function Collector({type}) {
       
  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
         <Grid container className={type==2 && classNames(styles.light)} spacing={2}>
            <Grid item xs={2}>
                <div>{type}</div>
            </Grid >

            <Grid item xs={10}>
               <User />
            </Grid >
        </Grid>
    </Container>
  );
}