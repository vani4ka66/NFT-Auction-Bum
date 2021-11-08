import React, { useState } from "react"
import styles from "./ProductImage.module.scss";
import classNames from "classnames";


export default function ProductImage({url}) {
       
  return (
      <div className="ProductImage_product-image">
        <img className="ProductImage_image" src={url} alt="" />
      </div>
  );
}