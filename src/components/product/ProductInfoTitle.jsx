import Container from "@mui/material/Container";
import classNames from "classnames";
import styles from "./ProductImage.module.scss";
import { Tipography } from "@mui/material";


export default function ProductInfoTitle({text}) {
  return (
    <div className="product-info-title">
      <Container className={classNames(styles.container)} maxWidth="xl">
            <Tipography className="title">
                <div>{text}</div>
            </Tipography>
      </Container>
    </div>
  );
}