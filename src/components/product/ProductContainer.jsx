import React, { useState } from "react"
import styles from "./ProductActions.module.scss";
import classNames from "classnames";
import { Grid, Button } from "@mui/material";
import ProductInfo from "./ProductInfo";
import ProductTabs from './ProductTabs'
import ProductImage from './ProductImage'
import ProductActions from "./ProductActions";


export default function ProductContainer({}) {
       
  return (
        <div className={styles["product-container"]} maxWidth="xl">
           <Grid container spacing={2}>
                <Grid item xs={6}>
                  <ProductImage />
                  <ProductInfo />
                </Grid >

                <Grid item xs={1}></Grid >

                <Grid item xs={5}>
                  <ProductTabs />
                  <ProductActions />
                </Grid >
            </Grid>
        </div>
  )
}