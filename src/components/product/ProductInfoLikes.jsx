import React, { useState } from "react"
import styles from "./ProductInfoLikes.module.scss";
import classNames from "classnames";
import { Chip } from '@mui/material';



export default function ProductInfoLikes({amount=0}) {
       
  return (
      <div className="ProductInfoLikes_product-info-likes">
        <Chip label={likes} className="ProductInfoLikes_likes" />
      </div>
  );
}