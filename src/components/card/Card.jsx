// import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react"
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
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Cardd({name="fdkflk", likes, mediaUrl, price, currency, user}) {
    
    const [like, setLike] = useState("0")

    useEffect(() => {
        let reg;

        if(like.toString().length > 9){
            reg = new RegExp(/(\d{9}$)/);
            setLike(like.toString().replace(reg, 'B'))
            return
        }
        if(like.toString().length > 6){
            reg = new RegExp(/(\d{6}$)/);
            setLike(like.toString().replace(reg, 'M'))
            return
        }
        if(like.toString().length > 3){
            reg = new RegExp(/(\d{3}$)/);
            setLike(like.toString().replace(reg, 'K').toLowerCase())
            return
        }
        
      }, []);

  return (
        <Card sx={{ maxWidth: 345 }}>
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
                    <FavoriteIcon className="likes" />
                    <span color="text.primary">{like.toString()}</span> 
                </IconButton>
            </CardActions>
        </Card>
  );
}
