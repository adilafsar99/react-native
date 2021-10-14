import {useState} from 'react';
import {
  BasicTextField,
  BasicButton
} from '../../../../components';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const TransactionInput = ({item, amount, setItem, setAmount, getTransaction}) => {
  return(
    <>
        <Grid sx={{mt: 9}} columnSpacing={{md: 1}} justifyContent="center" container>
          <Grid xs={12} md={4} item>
            <BasicTextField type="text" label="Item" value={item} onChange={(e) => setItem(e.target.value)} />
          </Grid>
          <Grid xs={12} md={4} item>
            <BasicTextField type="number" label="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </Grid>
          <Grid xs={12} md={8} item>
            <BasicButton type="submit" label="Add Transaction" onClick={() => getTransaction()} />
          </Grid>
        </Grid>
    </>
  )
}

export default TransactionInput;