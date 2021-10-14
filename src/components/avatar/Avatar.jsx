import { height, width } from "@mui/material/node_modules/@mui/system";
import React from "react"
import Badge from "../../../public/images/verified.svg"

export default class Avatar extends React.Component {
    constructor(width = 90, height = 90,url = '', verified = false){
        this.size = {
            width: width,
            height: height
        }
        this.url = url;
        this.verified = verified
    }

    render() {
      return <div className="avatar" style={width = this.size.width, height = this.size.height}>
                <img src="../../../public/images/avatar.png" className="image" alt="" />
                <img className="badge" src={Badge} />
            </div>;
    }
  }