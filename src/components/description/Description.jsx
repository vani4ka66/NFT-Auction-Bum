import React, { useState } from "react"
import styles from "./Hero.module.scss";
import classNames from "classnames";
import { Typography } from '@mui/material';


export default function Description({text, image}) {
       
  return (
      <div className="description">
        <Typography className="text" variant="body1" component="h2">
            {text}
        </Typography>
        <img className="image" src={image} alt="" />
      </div>
  );
}