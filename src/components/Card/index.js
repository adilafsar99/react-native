import * as React from 'react';
import {Card, CardContent, CardMedia, CardActionArea, Typography} from '@material-ui/core';
import postImage from '../../assets/images/post_image.webp';

export default function ImageCard({fontColor, backgroundColor, borderColor}) {
  return (
    <Card style={{ border: `1px solid ${borderColor}` }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={postImage}
          alt="post_image"
        />
        <CardContent style={{
          color: fontColor,
          backgroundColor: backgroundColor
        }} >
          <Typography gutterBottom variant="body1" component="div">
            Responsive Web Development
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Follow this non-existent link to learn all best practices that are being implemented right now to create fluid and responsive websites.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
