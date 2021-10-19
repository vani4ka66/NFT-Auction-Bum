import React, { useState } from "react"
import Container from "@mui/material/Container";
import styles from "./Trending.module.scss";
import classNames from "classnames";
import Card from "../card/Card"
import Select from '@mui/material/Select';
import { Grid } from "@mui/material";
import { MenuItem } from "@mui/material";

export default function Trending({cards=[ {
    name: "Ivy",
    user: {avatarUrl: "/images/avatar.png", verified: true},
    mediaUrl: "/images/nft.jpg",
    price: 1, 
    currency: "ETH"
}, 
{
    name: "Julie",
    user: {avatarUrl: "/images/avatar.png", verified: true},
    mediaUrl: "/images/nft.jpg",
},]}) {

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
            {(cards.map(card => {
               return   <Grid item xs={3}>
                            <Card {...card} />
                        </Grid >
            }))}
        </Grid>
    </Container>
  );
}