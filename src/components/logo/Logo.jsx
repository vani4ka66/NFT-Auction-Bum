import Container from "@mui/material/Container";
import classNames from "classnames";
import { useState } from "react";
import logo from "../../../public/images/logo.svg"
import logoMuted from "../../../public/images/logo-muted.svg"
// import logoEnum from "../enums/logoEnum";

export default function Logo() {
    const [type, setType] = useState('default')

    return (
        <div>
            {type.default && <img src={logo} />}
            {type.muted && <img src={logoMuted} />}
            {console.log(type)}
            
        </div>
  );
}
