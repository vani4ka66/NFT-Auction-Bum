import React, { useState } from "react"
import Container from "@mui/material/Container";
import styles from "./HowStep.module.scss";
import classNames from "classnames";
import Step from "../step/Step"
import { Grid } from "@mui/material";


export default function HowStep({description="", title="", items=[], link=""}) {
       
  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
         <Grid container spacing={2}>
            <Grid item xs={8}>
                <h1>{title}</h1>
                <p>{description}</p>
                <a href={link} target="_blank">LEARN MORE </a>
            </Grid >
            <Grid item xs={4}>
                {(items.map((item, index) => {
                return  <Grid item xs={12}>
                            {<Step number={index} {...item} /> }
                        </Grid >
                }))}
            </Grid >
        </Grid>
    </Container>
  );
}