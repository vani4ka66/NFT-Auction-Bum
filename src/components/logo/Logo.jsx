import React from "react"
import logo from "../../../public/images/logo.svg"
import logoMuted from "../../../public/images/logo-muted.svg"


export default class Logo extends React.Component {
    constructor(){
        
        this.type = 'default';
    }

    render() {
      return <div>
                {type === "default" && <img src={logo} />}
                {type === "muted" && <img src={logoMuted} />}
                {console.log(type)}
            </div>
    }
  }
