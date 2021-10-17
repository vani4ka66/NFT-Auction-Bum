import React, { useState } from "react"
import classNames from "classnames";
import logo from "../../../public/images/logo.svg"
import logoMuted from "../../../public/images/logo-muted.svg"
// import styles from "./Logo.module.scss";

export default function Logo(type) {

  // const [typeA, setType] = useState('default')

  return (
    <div>
    {type === "default" && <img className={classNames(styles.logo)} src="../../../public/images/logo.svg" />}
    {type === "muted" && <img src="../../../public/images/logo-muted.svg" />} 
     
</div>
  );
}

