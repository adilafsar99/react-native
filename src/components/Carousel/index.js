import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  Grid,
  Typography
} from '@material-ui/core';
import Daily from '../../assets/images/daily_sale.webp';
import Saturday from '../../assets/images/saturday_sale.webp';
import October from '../../assets/images/october_sale.jpg';

export default function BasicCarousel() {
  const [items,
    setItems] = React.useState([{
      src: Daily,
      alt: "daily_sale",
      caption: "Daily sale to provide for your everday needs. Today is 30% off.",
      captionStyles: {
        color: "#fff",
        backgroundColor: "#d01a1a"
      },
      buttonStyles: {
        marginBottom: "30px",
        border: "2px solid #fff",
        borderRadius: "20px",
        boxShadow: "1px 1px 1px 1px",
        color: "#fff",
        backgroundColor: "#d01a1a",
        fontWeight: "bold",
        padding: "8px"
      },
    },
      {
        src: Saturday,
        alt: "saturday_sale",
        caption: "Make your Saturdays great by availing our first Saturday Super Sale.",
        captionStyles: {
          color: "#000",
          backgroundImage: "radial-gradient(circle, #fdd201, #fcc900, #fbbf00, #f9b600, #f7ad01)",
        },
        buttonStyles: {
          marginBottom: "30px",
          border: "2px solid #fff",
          borderRadius: "20px",
          boxShadow: "1px 1px 2px 2px",
          color: "#000",
          backgroundColor: "#fdd201",
          fontWeight: "bold",
          padding: "8px"
        }
      },
      {
        src: October,
        alt: "october_sale",
        caption: "Fall season has dropped our prices! Hurry up and collect the fallen products.",
        captionStyles: {
          color: "#854116",
          backgroundImage: "linear-gradient(to right top, #f85a10, #fd7600, #ff8f00, #ffa800, #ffbf00)"
        },
        buttonStyles: {
          marginBottom: "30px",
          border: "2px solid #f85a10",
          borderRadius: "20px",
          boxShadow: "1px 1px 2px 2px",
          color: "#fdd270",
          backgroundColor: "#f85a10",
          fontWeight: "bold",
          padding: "8px"
        }
      }]);
  return (
    <Carousel>
            {
      items.map((item, i) => <Item key={i} item={item} />)
      }
        </Carousel>
  )
}

  function Item( {
    item
  }) {
    const captionGridStyles = {
      paddingTop: "40px",
      paddingRight: "10px",
      paddingLeft: "10px",
      height: "225px",
    };
    const buttonStyles = item.buttonStyles;
    return (
      <Grid container>
        <Grid xs={12} md={6} item>
          <img width="100%" height="300px" src={item.src} alt={item.alt} />
        </Grid>
        <Grid style={item.captionStyles} xs={12} md={6} container item>
          <Grid style={captionGridStyles} xs={12} item>
            <Typography align="center" variant="h4">
              {item.caption}
            </Typography>
          </Grid>
          <Grid xs={12} justifyContent="center" container item>
            <button style={item.buttonStyles}>Go To Store!</button>
          </Grid>
        </Grid>
      </Grid>
    )
  }