import React, { useState } from "react"
import styles from "./Hero.module.scss";
import classNames from "classnames";
import { Typography } from '@mui/material';


export default function Hero({text}) {
       
  return (
      <div className="hero">
        <Typography className="text" variant="h1" component="h2">
            {text}
        </Typography>
      </div>
  );
}