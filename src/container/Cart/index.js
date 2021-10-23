import {
  Grid,
  Typography
} from '@material-ui/core';
import {
  useSelector
} from 'react-redux';
import post from '../../assets/images/logo.png';

function Cart() {
  const cartProducts = useSelector(state => state.cartProducts.cart);
  return (
    <div>
      <Grid container>
        <Typography style={{marginLeft: "8px", marginBottom: "10px", marginTop: "8px", borderBottom: "2px solid"}} variant="h4">
          Cart
        </Typography>
      </Grid>
      <Grid style={{paddingLeft: "10px", paddingTop: "10px"}} container>
      {cartProducts.map((item) => (
         <Grid style={{border: "2px solid", marginBottom: "20px"}} spacing={4} container item>
           <Grid xs={5} item>
             <img width={150} src={post} alt="dummy_image" />
           </Grid>
           <Grid xs={5} item>
             <Typography>
               {item.name}
             </Typography>
             <Typography>
               Rs {item.price}
             </Typography>
           </Grid>
         </Grid> 
      ))}
      </Grid>
    </div>
  )
}

export default Cart;