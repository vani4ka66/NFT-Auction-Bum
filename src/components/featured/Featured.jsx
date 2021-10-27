import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import styles from "./Featured.module.scss";
import classNames from "classnames";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useRouter } from 'next/router'

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}
  
export default function Featured({items=[]}) {
    const router = useRouter()

    return (
        <Container className={classNames(styles.container)} maxWidth="xl">
            <ImageList
                sx={{ width: 500, height: 250 }}
                variant="quilted"
                cols={6}
                rowHeight={131}
            >
                {items.map((item) => {
                    return (
                        <ImageListItem key={item.image} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item.image, 131, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                            onClick={() => router.push(item.href)}
                        />
                        {/* <ImageListItemBar
                            sx={{
                            background:
                                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                            }}
                            title={item.title}
                            position="top"
                            
                            actionPosition="left"
                        /> */}
                        </ImageListItem>
                    );
                })}
            </ImageList>
      </Container>
    );
}