import React, { useState } from "react"
import styles from "./ProductInfo.module.scss";
import classNames from "classnames";
import User from "../user/User";
import {  Tab, TableRow } from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import { parseISO, formatDistance } from 'date-fns'


export default function ProductTabs({text, bids=[]}) {

  const bidss = [
    {
      id: '1',
      name: 'ldskdskd',
      lastName: 'bbbbbb',
      date: Date.now()
    }
  ]
       
  return (
        <div className="ProductTabs_produst-tabs" maxWidth="xl">
            <User />
              <TabContext className="tab-details">
                  <Tab label="Details" className="ProductsTab_tab-details" />
                  <Tab label="Bids" className="ProductsTab_tab-bids" />
                </TabContext>
          
              {(bidss.map((bid, i) => {
                    return  <div>
                               <TableRow className={`table-row-${i}`} />
                               {/* {formatDistance(parseISO(bid.date), 'yyyy-MM-dd')} */}
                              {/* {formatDistance(parseISO(bid.date))} */}
                            </div >
              }))}
        </div>
  )
}