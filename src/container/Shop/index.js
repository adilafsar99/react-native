import {
  Grid,
  Typography
} from '@material-ui/core';
import ImageCard from '../../components/Card';
import {
  useSelector
} from 'react-redux';

function Shop() {
  const styles = {
    card: {
      padding: "10px"
    }
  };
  const allProducts = useSelector(state => state.allProducts);
  return (
    <div>
      <Grid container>
        <Typography style={{marginLeft: "8px", marginBottom: "10px", marginTop: "8px", borderBottom: "2px solid"}} variant="h4">
          All Products
        </Typography>
      </Grid>
      <Grid container>
         <Grid container>
        <Typography style={{marginLeft: "8px", marginBottom: "10px", marginTop: "8px", borderBottom: "2px solid"}} variant="h4">
          T Shirts
        </Typography>
      </Grid>
        {allProducts.tShirts.map((item) => (
      <Grid style={styles.card} xs={12} md={6} lg={4} item>
            <ImageCard item={item} />
          </Grid>
    ))}
        <Grid container>
        <Typography style={{marginLeft: "8px", marginBottom: "10px", marginTop: "8px", borderBottom: "2px solid"}} variant="h4">
          Utensils
        </Typography>
      </Grid>
        {allProducts.utensils.map((item) => (
      <Grid style={styles.card} xs={12} md={6} lg={4} item>
            <ImageCard item={item} />
          </Grid>
    ))}
        <Grid container>
        <Typography style={{marginLeft: "8px", marginBottom: "10px", marginTop: "8px", borderBottom: "2px solid"}} variant="h4">
          Accessories
        </Typography>
      </Grid>
        {allProducts.accessories.map((item) => (
      <Grid style={styles.card} xs={12} md={6} lg={4} item>
            <ImageCard item={item} />
          </Grid>
    ))}
      </Grid>
    </div>
  )
}

export default Shop;