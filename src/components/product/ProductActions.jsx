import React, { useState } from "react"
import styles from "./ProductActions.module.scss";
import classNames from "classnames";
import { Grid, Button } from "@mui/material";


export default function ProductActions({isLive, buyAmount, bidAmount, onbuy, onBid}) {
       
  return (
        <div className={styles["product-actions"]} maxWidth="xl">
           <Grid container spacing={2}>
                <Grid item xs={7}>
                   <Button className="button" onClick={onbuy} disabled={isLive}>Buy for {buyAmount}</Button>
                </Grid >

                <Grid item xs={5}>
                    <Button className="button" onClick={onBid} disabled={isLive}>Place a bid {bidAmount}</Button>
                </Grid >
            </Grid>
        </div>
  )
}