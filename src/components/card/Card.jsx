// import Paper from "@mui/material/Paper";
import React from "react"
import Container from "@mui/material/Container";
import styles from "./Card.module.scss";
import classNames from "classnames";
import Avatar from "../../components/avatar/Avatar"

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Cardd({name, likes, mediaUrl, price, currency, user}) {

  return (
    <div className={classNames(styles.wrapper)}>
        <Container className={classNames(styles.container)} maxWidth="xl">
            {/* <Avatar /> */}
            <div className="card">
                {/* <img className="media" src="/images/nft.jpg" alt="" /> */}
                {/* <div className="title"></div> */}
                {/* <div className="price">{price} {currency}</div> */}
                {/* <div className="likes"></div> */}
            </div>

        </Container>

        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar />}
        // title="Shrimp and Chorizo Paella"
        verified="true"
      />
      <CardMedia
        className="media"
        component="img"
        image="/images/nft.jpg"
        alt="pic"
      />

      <CardActions >
            <Typography variant="body2" color="text.secondary">
                <div className="title"></div>
                <div className="name">{name}</div>
                <div className="price">{price}  {currency}</div>
            </Typography>
        
            {/* <IconButton  aria-label="share">
                <ShareIcon />
            </IconButton> */}

            <IconButton aria-label="add to favorites">
                <FavoriteIcon className="likes" /> {likes}
            </IconButton>
      </CardActions>
    </Card>
    </div>
  );
}
