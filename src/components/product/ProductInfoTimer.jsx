import React, { useState } from "react"
import styles from "./ProductInfoTimer.module.scss";
import classNames from "classnames";
import Countdown from 'react-countdown';

export default function ProductInfoTimer({timeEnd,onTimeEnd}) {
       
  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles["product-info-timer"], {[styles["active"]]: timeEnd})}>
        <label className="title">Ends in</label>
          {timeEnd &&  <div className="timer">
                  <Countdown date={timeEnd} onStop={onTimeEnd} />
          </div>}
      </div>
    </div>
     
  );
}