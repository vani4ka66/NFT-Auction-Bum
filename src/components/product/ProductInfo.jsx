import React, { useState } from "react"
import styles from "./ProductInfo.module.scss";
import classNames from "classnames";
import ProductTitle from "./ProductInfoTitle";
import ProductInfoStatus from "./ProductInfoStatus";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductInfoLikes from "./ProductInfoLikes";
import ProductInfoCreator from "./ProductInfoCreator";
import ProductInfoTimer from "./ProductInfoTimer";
import { Stack } from "@mui/material";
import { Item } from "@mui/material";
import { Grid, Container } from "@mui/material";


export default function ProductInfo({title, creator, price, currency, likes, onTimeEnd,timeEnd, isLive}) {
       
  return (
        <div className={styles["product-info"]} maxWidth="xl">
           <ProductTitle title={title} />

           <Stack className={styles["stats"]} direction="row" spacing={2}>
                <ProductInfoPrice price={price} currency={currency} />
                <ProductInfoLikes likes={likes} />
            </Stack>

           <Grid container spacing={2}>
                <Grid item xs={7}>
                    <ProductInfoCreator creator={creator} />
                </Grid >

                <Grid item xs={5}>
                    <ProductInfoTimer onStop={onTimeEnd} date={timeEnd} />
                </Grid >
            </Grid>

            {isLive && <ProductInfoStatus />}
        </div>
  )
}