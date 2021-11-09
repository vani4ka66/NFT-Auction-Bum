import React, { useState } from "react"
import styles from "./ProductInfoTimer.module.scss";
import classNames from "classnames";
import Countdown from 'react-countdown';

export default function ProductInfoTimer({timeEnd,onTimeEnd}) {
       
  return (
      <div className="ProductInfoTimer_product-info-timer">
            {!timeEnd && <div className="timer">
                            <label className="ProductInfoTimer_title">Ends in</label>
                            <Countdown onTimeEnd={onTimeEnd} />
                        </div>
            
            }
      </div>
  );
}