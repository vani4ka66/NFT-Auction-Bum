import React, { useState } from "react"
import styles from "./ProductInfo.module.scss";
import classNames from "classnames";
import User from "../user/User";
import { TabContext, Container, Tab } from "@mui/material";


export default function ProductTabs({text, bids}) {
       
  return (
        <Container className="ProductInfo_product-tabs" maxWidth="xl">

           {/* <TabContext className={`table-row-${text}`} direction="row" spacing={2}> */}
                <Tab label="Details" className="tab-details" />
                <Tab label="Bids" className="tab-bids" />
            {/* </TabContext> */}

        </Container>
  )
}