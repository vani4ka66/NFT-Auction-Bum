import React, { useState } from "react"
import classNames from "classnames";
// import styles from "./Logo.module.scss";

export default function Logo({type="default"}) {

  // const [type, setType] = useState('default')

  return (
    <div>
      {type === "default" && <img src="/images/logo.svg" />}
      
      {/* <img src="/images/logo.svg" /> */}

      {type === "muted" && <img src="/images/logo-muted.svg" />} 
     
</div>
  );
}

