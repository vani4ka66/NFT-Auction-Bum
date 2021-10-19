import React, { useState } from "react"
import Container from "@mui/material/Container";
import styles from "./Trending.module.scss";
import classNames from "classnames";
import Card from "../card/Card"
import Select from '@mui/material/Select';
import { Grid } from "@mui/material";
import { MenuItem } from "@mui/material";

export default function Avatar({size=90, url="/images/avatar.png", verified=false}) {

 
    const card1 = {
        name: "Ivy",
        user :{
            avatarUrl: "images/avatr.png",
            verified: true
        },
        price: 1,
        currency: "ETH"
    }

    const card2 = {
        name: "Judie",
        user :{
            avatarUrl: "images/avatr.png",
            verified: true
        },
        price: 2.3,
        currency: "ETH"
    }

    const card3 = {
        name: "Juniper",
        user :{
            avatarUrl: "images/avatr.png",
            verified: true
        },
        price: 5,
        currency: "ETH"
    }

    const card4 = {
        name: "Maple",
        user :{
            avatarUrl: "images/avatr.png",
            verified: true
        },
        price: 10,
        currency: "ETH"
    }

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
            <Grid item xs={3}>
                <Card {...card1} />
            </Grid >
            <Grid item xs={3}>
                <Card {...card2} />
            </Grid >
            <Grid item xs={3}>
                <Card {...card3} />
            </Grid >
            <Grid item xs={3}>
                <Card {...card4} />
            </Grid >
        </Grid>
            {/* <img width={size} height={size} className={classNames(styles.image)} src={url} alt="" /> */}
      
      
    </Container>
  );
}