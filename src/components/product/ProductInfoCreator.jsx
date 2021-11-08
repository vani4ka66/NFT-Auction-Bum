import React, { useState } from "react"
import styles from "./ProductInfoCreator.module.scss";
'@use "../../styles/colors'
import classNames from "classnames";
import { Chip } from '@mui/material';
import User from "../user/User";



export default function ProductInfoCreator({name, avatar, verified=false}) {
       
  return (
      <div className="ProductInfoCreator_product-info-creator">
        <label className="title"></label>
        <div className="user-container">
            <User name={name} avatar={avatar} verified={verified} />
        </div>
       
      </div>
  );
}