import React, { useState } from "react"
import styles from "./ProductImage.module.scss";
import classNames from "classnames";


export default function ProductImage({URL}) {
       
  return (
      <div className="product-image">
        <div className={classNames(styles.container)} maxWidth="xl">
            <img className="image" src={URL} alt="" />
        </div>
      </div>
  );
}