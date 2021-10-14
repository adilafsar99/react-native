import {useState, useEffect} from 'react';
import Container from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './css/index.css';

const TransactionRecord = ({transaction}) => {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransations] = useState([]);
  
  const showTransaction = () => {
    if (transaction.amount >= 0) {
      setIncome(income + Number(transaction.amount));
      setBalance(balance + Number(transaction.amount));
      const arr = [...transactions];
      arr.push(transaction);
      setTransations(arr);
    }
    else {
      transaction.amount = Number(transaction.amount?.slice(1));
      setExpense(expense + transaction.amount);
    }
  }
  
  const removeTransaction = (index) => {
    const arr = [... transactions];
    setIncome(income - transactions[index].amount);
    setBalance(balance - transactions[index].amount);
    arr.splice(index, 1);
    setTransations(arr);
  }
  
  useEffect(() => {
    showTransaction();
  }, [transaction])
  return(
    <>
        <Grid justifyContent="center" container>
          <Grid item>
            <Typography variant="h6">
              Balance
            </Typography>
            <Typography>
              {balance || 0}
            </Typography>
          </Grid>
        </Grid>
        <Grid columnSpacing={{xs: 2}} justifyContent="center" container>
          <Grid item>
            <Typography variant="h6">
              Income
            </Typography>
            <Typography>
              {income || 0}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              Expense
            </Typography>
            <Typography>
              {expense || 0}
            </Typography>
          </Grid>
        </Grid>
        <Grid justifyContent="center" container>
          <Grid xs={10} item>
            {transactions.map((v, i) => (
              <div className="transactions" key={i}>
                <p>{v.item}</p>
                <p>{"Rs " + v.amount}</p>
                <button className="removeButton" onClick={() => removeTransaction(i)}>Remove</button>
              </div>
            ))}
          </Grid>
        </Grid>
    </>
  )
}

export default TransactionRecord;