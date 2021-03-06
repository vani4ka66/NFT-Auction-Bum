import React, { useState } from "react"
import Container from "@mui/material/Container";
import styles from "./CollectorColumn.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";
import Collector from "./Collector"


export default function CollectorColumn({items=[]}) {
       
  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
         <Grid container spacing={2}>
            <Grid item xs={12}>
                {(items.map((item, index) => {
                return  <Grid item xs={12}>
                            {<Collector type={index===2 && "light"} {...item} /> }
                        </Grid >
                }))}
            </Grid >
        </Grid>
    </Container>
  );
}