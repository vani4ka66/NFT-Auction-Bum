import React, { useState } from "react"
import styles from "./ProductInfoTimer.module.scss";
import classNames from "classnames";
import Countdown from 'react-countdown';

export default function ProductInfoTimer({timeEnd,onTimeEnd}) {
       
  return (
      <div className={classNames(styles["ProductInfoTimer_product-info-timer"], {[styles["active"]]: timeEnd})}>
        <label className="title">Ends in</label>
           <div className="timer">
              {timeEnd && <Countdown date={timeEnd} onStop={onTimeEnd} />}
          </div>
      </div>
  );
}