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
        <div className="ProductTabs_product-tabs" maxWidth="xl">
              <TabContext className="tab-details">
                  <Tab label="Details" className="ProductsTab_tab-details" />
                  <Tab label="Bids" className="ProductsTab_tab-bids" />
                </TabContext>
          
              {(bids.map((bid, i) => {
                    return  <div>
                               <TableRow className={`table-row-${i}`}>
                               {/* {formatDistance(parseISO(bid.date), 'yyyy-MM-dd')} */}
                              
                                  <User {...bid} />
                               </TableRow>
                            </div >
              }))}
        </div>
  )
}