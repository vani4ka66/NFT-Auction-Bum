import React, { useState } from "react"
import styles from "./ProductInfoCreator.module.scss";
import classNames from "classnames";
import { Chip } from '@mui/material';
import User from "../user/User";



export default function ProductInfoCreator({name, avatar, verified=false}) {
       
  return (
      <div className="ProductInfoCreator_product-info-creator">
        <div className="user-container">
            <label className="title">Creator</label>
            <User name={name} avatar={avatar} verified={verified} />
        </div>
       
      </div>
  );
}