import {useState} from 'react';
import {TransactionInput, TransactionRecord} from './components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CustomizedSnackbars from '../../components/Snackbar';

const ExpenseTracker = () => {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState(0);
  const [transaction, setTransaction] = useState({});
  const getTransaction = () => {
    if (item.length === 0) {
      alert("Both fields are required!");
      return;
    }
    let isEmpty = true;
    for (let i = 0; i < item.length; i++) {
      if (item[i] !== " ") {
        isEmpty = false;
      }
    }
    if (isEmpty) {
      alert("Item field is empty!");
      return;
    }
    if (amount.length === 0) {
      alert("Both fields are required!");
      return;
    }
    for (let i = 0; i < amount.length; i++) {
      if (amount[i] !== " ") {
        isEmpty = false;
      }
    }
    if (isEmpty) {
      alert("Amount field is empty!");
      return;
    }
    setTransaction({item, amount});
    setItem("");
    setAmount(0);
  }
  return(
    <>
      <AppBar sx={{backgroundColor: "#8c2626"}}>
        <Toolbar>
          <Typography variant="h5">
            Expense Tracker
          </Typography>
        </Toolbar>
      </AppBar>
      <TransactionInput item={item} amount={amount} setItem={setItem} setAmount={setAmount} getTransaction={getTransaction} />
      <TransactionRecord transaction={transaction} />
    </>
  )
}

export default ExpenseTracker;