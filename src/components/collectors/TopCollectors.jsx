import React, { useState } from "react"
import Container from "@mui/material/Container";
import styles from "./TopCollectors.module.scss";
import classNames from "classnames";
import CollectorColums from "../collectors/CollectorColumn"
import Select from '@mui/material/Select';
import { Grid } from "@mui/material";
import { MenuItem } from "@mui/material";
import chunk from 'lodash.chunk';

export default function TopCollectors({collectors=[]}) {

var newArr = chunk(collectors, 3);

  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <h1>Top Collectors</h1>
            </Grid >
            <Grid item xs={3}>
              <Select className={classNames(styles.select)} value="This week" label="Age">
                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </Grid >
        </Grid>
       
        <Grid container spacing={2}>
            {(newArr.map(collector => {
               return   <Grid item xs={3}>
                            <CollectorColums id={collector.id} {...collector} />
                            <div>djsdskdj</div>
                        </Grid >
            }))}
        </Grid>
    </Container>
  );
}