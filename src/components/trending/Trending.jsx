import React, { useState } from "react"
import Container from "@mui/material/Container";
import styles from "./Trending.module.scss";
import classNames from "classnames";
import Card from "../card/Card"
import Select from '@mui/material/Select';
import { Grid } from "@mui/material";
import { MenuItem } from "@mui/material";

export default function Trending({cards=[]}) {

  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <h1>Trending</h1>
            </Grid >
            <Grid item xs={3}>
              <Select className={classNames(styles.select)} value="This week" label="Age">
                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </Grid >
        </Grid>
       
        <Grid container spacing={2}>
            {cards.map(element => {
                <Grid item xs={3}>
                    <Card {...element} />
                </Grid >
            })}
        </Grid>
    </Container>
  );
}