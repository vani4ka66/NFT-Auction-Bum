import React, { useState } from "react"
import Container from "@mui/material/Container";
import styles from "./How.module.scss";
import classNames from "classnames";
import Step from "../step/Step"
import { Grid } from "@mui/material";


export default function How({description="", title="", itemssssss=[], link=""}) {

    const items = [
        {
            title: "A",
            description: "jdklsdfjfjoewf",
        },
        {
            title: "A",
            description: "jdklsdfjfjoewf",
        },
        {
            title: "A",
            description: "jdklsdfjfjoewf",
        },
    ]
       

  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
         <Grid container spacing={2}>
            <Grid item xs={8}>
                <h1>{title}</h1>
                <p>{description}</p>
                <a href={link} target="_blank">LEARN MORE </a>
            </Grid >
            <Grid item xs={4}>
                {(items.map((i, index) => {
                return  <Grid item xs={12}>
                            {<Step number={index} {...i} /> }
                        </Grid >
                }))}

                {/* return  <Grid item xs={12}>
                            {<Step {...i} /> }
                        </Grid >
                }))} */}
            </Grid >
        </Grid>
    </Container>
  );
}