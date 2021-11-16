import React, { useState } from "react"
import styles from "./ProductInfo.module.scss";
import classNames from "classnames";
import User from "../user/User";
import {  Tab, TabContext } from "@mui/material";
import { parseISO, formatDistance } from 'date-fns'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function ProductTabs({text, bids=[]}) {
       
  return (
        <div className="ProductTabs_product-tabs" maxWidth="xl">
            <TabContext className="tab-details">
                  <Tab label="Details" className="ProductsTab_tab-details" />
                  <Tab label="Bids" className="ProductsTab_tab-bids" />
            </TabContext>

            {/* <Table> */}
                  {/* <TableBody> */}
                        {(bids.map((bid, i) => {
                              return  <div>
                                          <TableRow className={`table-row-${i}`}>
                                                {/* {formatDistance(parseISO(bid.date), 'yyyy-MM-dd')} */}
                                                <TableCell>
                                                      <User />
                                                </TableCell>
                                                <TableCell>
                                                      {bid.amount}
                                                </TableCell>
                                                <TableCell>
                                                      {bid.date}
                                                </TableCell>
                                          </TableRow>
                                    </div >
                        }))}

                  {/* </TableBody> */}
            {/* </Table> */}
        </div>
  )
}