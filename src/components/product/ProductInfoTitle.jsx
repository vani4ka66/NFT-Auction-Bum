import Container from "@mui/material/Container";
import classNames from "classnames";
import styles from "./ProductImage.module.scss";
import { Typography } from '@mui/material';


export default function ProductInfoTitle({text}) {
  return (
    <div className="product-info-title">
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Typography variant="h1" component="h2">
               {text}
        </Typography>;
      </Container>
    </div>
  );
}