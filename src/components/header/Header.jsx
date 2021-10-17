import SearchIcon from "@mui/icons-material/Search"
import Container from "@mui/material/Container";
import styles from "./Header.module.scss";
import classNames from "classnames";
import Logo from "../../components/logo/Logo"
import { Grid } from "@mui/material";
import { Button } from "@mui/material";


export default function Header() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Logo />
                </Grid >
                <Grid item xs={8}>
                  <div>
                  <SearchIcon></SearchIcon>
                      <input type="text" />
                  </div>
                </Grid >
                <Grid item xs={2}>
                    <Button variant="text">EXPLORE</Button>
                </Grid >
            </Grid >
        
      </Container>
    </div>
  );
}