import React, { useState } from "react"
import styles from "./User.module.scss";
import classNames from "classnames";
import Avatar from "../avatar/Avatar";
import { Grid } from "@mui/material";


export default function User({name='', info='', avatar='', size=55, verified=false}) {
    const [w, setW] = useState(55);

  return (
        <Grid container className={classNames(styles.user)} spacing={2}>
            <Grid item xs={6}>
                <Avatar size={size} />  
            </Grid >
            
            <Grid item xs={6}>
                <div className={classNames(styles.name)}>{name}</div>
                <div className={classNames(styles.info)}>{info}</div>
            </Grid >
        </Grid>
  );
}