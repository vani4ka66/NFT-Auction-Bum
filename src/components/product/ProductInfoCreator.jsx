import React, { useState } from "react"
import styles from "./ProductInfoCreator.module.scss";
import classNames from "classnames";
import User from "../user/User";



export default function ProductInfoCreator({name, avatar, verified=false}) {
       
  return (
      <div className="ProductInfoCreator_product-info-creator">
            <label className="ProductInfoCreator_title">Creator</label>
            <div className="user-container">
                <User name={name} avatar={avatar} verified={verified} />
            </div>
      </div>
  );
}