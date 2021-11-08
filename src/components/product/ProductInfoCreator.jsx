import React, { useState } from "react"
import styles from "./ProductInfoCreator.module.scss";
import classNames from "classnames";
import { Chip } from '@mui/material';
import User from "../user/User";



export default function ProductInfoCreator({name, avatar, verified=false}) {
       
  return (
      <div className="ProductInfoCreator_product-info-creator">
        <Chip label="creator" className="title" />
        <div className="user-container">
            <User name={name} avatar={avatar} verified={verified} />
        </div>
       
      </div>
  );
}