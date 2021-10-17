import React, { useState } from "react"
import classNames from "classnames";
import logo from "../../../public/images/logo.svg"
import logoMuted from "../../../public/images/logo-muted.svg"
// import styles from "./Logo.module.scss";

export default function Logo(type="default") {

  // const [typeA, setType] = useState('default')

  return (
    <div>
    {/* {type === "default" && <img src="/images/logo-muted.svg" />} */}
    <img src="/images/logo.svg" />

    {type === "muted" && <img src="/images/logo-muted.svg" />} 
     
</div>
  );
}

