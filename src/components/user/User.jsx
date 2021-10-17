import React, { useState } from "react"
import Container from "@mui/material/Container";
import styles from "./User.module.scss";
import classNames from "classnames";
import Avatar from "../avatar/Avatar";
import { Grid } from "@mui/material";


export default function User({name='', info='', avatar='', size='55rem',verified=false}) {

  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
        <div className={classNames(styles.user)}>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Avatar />  
            </Grid >
            <Grid item xs={6}>
                <div className={classNames(styles.name)}>{name}</div>
                <div className={classNames(styles.info)}>{info}</div>
            </Grid >
           
            
            </Grid>
        </div>
    </Container>
  );
}