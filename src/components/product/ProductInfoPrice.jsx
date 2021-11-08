import React, { useState } from "react"
import styles from "./ProductImage.module.scss";
import classNames from "classnames";


export default function ProductInfoPrice({amount=0, currency}) {
       
  return (
      <div className="ProductInfoPrice_product-info-price">
       <div>{amount} {currency}</div>
      </div>
  );
}