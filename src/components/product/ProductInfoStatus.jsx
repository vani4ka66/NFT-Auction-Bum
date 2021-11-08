import React, { useState } from "react"
import styles from "./ProductInfoStatus.module.scss";
import classNames from "classnames";
import { Chip } from '@mui/material';



export default function ProductInfoStatus() {
       
  return (
      <div className="ProductInfoStatus_product-info-status">
        <Chip label="status" className="ProductInfoStatus_status" />
      </div>
  );
}