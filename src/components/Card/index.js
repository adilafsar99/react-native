import * as React from 'react';
import {Card, CardContent, CardMedia, CardActionArea, Typography, Button} from '@material-ui/core';
import Rating from 'react-rating';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai';
import postImage from '../../assets/images/logo.png';
import {useDispatch} from 'react-redux';
import Swal from 'sweetalert2'

export default function ImageCard({item}) {
  const dispatch = useDispatch();
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={postImage}
          alt="post_image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item?.name}
          </Typography>
          <Rating
          emptySymbol={<AiOutlineStar />}
          fullSymbol={<AiFillStar />}
          initialRating={item?.initialRating} />
          <Typography variant="h6" color="text.secondary">
            Price: Rs {item?.price}
          </Typography>
          <Button variant="contained" 
          onClick={() => {
              dispatch({type: "addToCart", item});
              Swal.fire('Added to cart!');
            }} >
            Add to cart
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
