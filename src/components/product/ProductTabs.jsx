import React, { useState } from "react"
import styles from "./ProductInfo.module.scss";
import classNames from "classnames";
import User from "../user/User";
import { Container, Tab, TableRow } from "@mui/material";
import { TabContext } from '@mui/lab';


export default function ProductTabs({text, bids=[]}) {
       
  return (
        <Container className={styles["product-tabs"]} maxWidth="xl">

            <TabContext label="Details" className="tab-details" value={text} />
           
           
            {bids.map((bid, i) => {
              <div>
                <TableRow className={`table-row-${i}`} />
                <TabContext label="Bids" className="tab-bids" value={bid} />
               </div>
            })}
           
            <User />

        </Container>
  )
}