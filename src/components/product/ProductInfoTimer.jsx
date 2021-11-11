import React, { useState } from "react"
import styles from "./ProductInfoTimer.module.scss";
import classNames from "classnames";
import Countdown from 'react-countdown';
import { style } from "@mui/material/node_modules/@mui/system";

export default function ProductInfoTimer({timeEnd,onTimeEnd}) {
       
  return (
      // <div className={classNames( {[styles["active"]]: timeEnd}, styles["ProductInfoTimer_product-info-timer"])}>
      <div className={"ProductInfoTimer_product-info-timer " + (timeEnd ? [styles["active"]] : '')}>

        <label className="title">Ends in</label>
           <div className="timer">
              {timeEnd !== null && <Countdown date={timeEnd} onStop={onTimeEnd} />}
          </div>
      </div>
  );
}