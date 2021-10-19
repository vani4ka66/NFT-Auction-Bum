import React, { useState } from "react"
import styles from "./Card.module.scss";
import classNames from "classnames";
import Avatar from "../../components/avatar/Avatar"
import MuiCard from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import millify from "millify";

export default function Card({name="", likes=0, mediaUrl, price, currency, user}) {

    const [like, setLike] = useState(0)

  return (
        <MuiCard sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={<Avatar {...user} />}
            />
           
            <img className={classNames(styles.media)} src="/images/nft.jpg" alt="pic" />

            <CardActions color="text.secondary">
                <CardContent variant="body2" color="text.secondary">
                    <div className="title"></div>
                    <div className="name">{name}</div>
                    <div className="price">~{price}  {currency}</div>
                </CardContent>

           
                <IconButton aria-label="add to favorites" >
                    <FavoriteIcon  />
                    <span className="likes">{millify(likes)}</span> 
                </IconButton>
            </CardActions>
        </MuiCard>
  );
}
