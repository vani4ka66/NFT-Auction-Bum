import React, { useState } from "react"
import styles from "./ProductInfo.module.scss";
import classNames from "classnames";
import User from "../user/User";
import { Container, Tab, TableRow } from "@mui/material";
// import { TabContext } from '@mui/lab';
import TabContext from '@mui/lab/TabContext';
import { parseISO, formatDistance } from 'date-fns'


export default function ProductTabs({text, bids=[]}) {
       
  return (
        <div className="ProductTabs_produst-tabs" maxWidth="xl">
              <TabContext className="tab-details" value={text}>
                  <Tab label="Details" className="ProductsTab_tab-details" />
                  <Tab label="Bids" className="ProductsTab_tab-bids" />
                </TabContext>
            

              {bids.map((bid, i) => {
                <div>
                  <TableRow className={`table-row-${i}`}   value={formatDistance({bid})} />
                  {/* <Tab label="Bids" className="tab-bids" value={bid} /> */}
                  {formatDistance({bid})}
                </div>
              })}
              
           
            <User />

        </div>
  )
}