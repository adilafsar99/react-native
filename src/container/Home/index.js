import {useState} from 'react';
import {
  ThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import BasicCarousel from '../../components/Carousel';
import {
  Grid,
  Typography
} from '@material-ui/core';

function Home() {
  const servicesFont = createMuiTheme({
    typography: {
      fontFamily: [
        'Nonum Gothic',
        'sans-serif',
      ].join(','),
    },
  });
  const [services,
    setServices] = useState([{
      title: "Operational 24/7",
      description: "We manage our employees by having them work in  multiple shifts to ensure that they are at their best, to serve you 24 hours and 7 days a week.",
      styles: {
        height: "280px",
        width: "280px",
        backgroundColor: "#d01a1a",
        borderRadius: "140px",
        border: "2px solid",
        paddingTop: "45px",
        marginTop: "10px",
      }
    },
    {
      title: "Nationwide Delivery",
      description: "We have stores in every major city of the country to cut down the delivery time and charges, so that you can get what you want on the same day.",
      styles: {
        height: "280px",
        width: "280px",
        backgroundColor: "#7fd18f",
        borderRadius: "140px",
        border: "2px solid",
        paddingTop: "45px",
        marginTop: "10px",
      }  
    },
    {
      title: "Internationally Certified",
      description: "Our goods have been tested for quality assurance by the relevant authorities and have been certified, meaning you get full value for your money.",
      styles: {
        height: "280px",
        width: "280px",
        backgroundColor: "#fbdb73",
        borderRadius: "140px",
        border: "2px solid",
        paddingTop: "45px",
        marginTop: "10px",
      }
    }]);
  return (
    <div>
      <BasicCarousel />
      <Grid container>
        {services.map((service) => (
          <Grid xs={12} md={4} justifyContent="center" container item>
            <div style={service.styles}>
              <Typography align="center" variant="h4">
                {service.title}
              </Typography>
              <ThemeProvider theme={servicesFont} >
              <Typography sx={{fontSize: "10px"}} align="center" variant="subtitle1">
                {service.description}
              </Typography>
              </ThemeProvider>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Home;