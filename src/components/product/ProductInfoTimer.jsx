import React, { useState } from "react"
import styles from "./ProductInfoTimer.module.scss";
import classNames from "classnames";
import Countdown from 'react-countdown';

export default function ProductInfoTimer({timeEnd,onTimeEnd}) {
       
  return (
      <div className="ProductInfoTimer_product-info-timer">
            {timeEnd !== null && <div className="timer">
                            <label className="title">Ends in</label>
                            <Countdown className={classNames(styles.ProductInfoTimer_active)} timeEnd={timeEnd} onTimeEnd={onTimeEnd} />
                        </div>
            
            }
      </div>
  );
}