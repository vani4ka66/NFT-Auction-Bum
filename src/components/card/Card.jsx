// import Paper from "@mui/material/Paper";
import React, { useState } from "react"
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

export default function Card1({name, likes=0, mediaUrl, price, currency, user}) {
    const [like, setLike] = useState(0)
    user = {
        verified: false,
        avatarUrl: ""
    }

  return (
    <div className={classNames(styles.wrapper)}>
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={<Avatar verified={user.verified} url={user.avatarUrl} />}
                // title="Shrimp and Chorizo Paella"
            />
            <CardMedia
                className={classNames(styles.media)}
                component="img"
                image="/images/nft.jpg"
                alt="pic"
            />

            <CardActions >
                    <Typography variant="body2" color="text.secondary">
                        <div className="title"></div>
                        <div className="name">{name}</div>
                        <div className="price">~{price}  {currency}</div>
                    </Typography>

                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon className="likes" /> {likes}
                    </IconButton>
            </CardActions>
        </Card>
    </div>
  );
}
