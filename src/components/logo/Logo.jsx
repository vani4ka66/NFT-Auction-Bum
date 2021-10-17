import React, { useState } from "react"
import classNames from "classnames";
// import styles from "./Logo.module.scss";

export default function Logo(props) {

  // const [typeA, setType] = useState('default')

  return (
    <div>
      {/* {type === "default" && <img src="/images/logo-muted.svg" />} */}
      
      <img src="/images/logo.svg" />

      {props.type === "muted" && <img src="/images/logo-muted.svg" />} 
     
</div>
  );
}

