import {useState} from "react";
import {useHistory} from "react-router-dom";
import {useStyles} from "./styles.js";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import {BasicTextField} from "../../components/Input";
import {BasicButton} from "../../components/Button";
import {Link} from 'react-router-dom';
import {auth, signInWithEmailAndPassword} from '../../config/Firebase/Firebase.js';

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  const login = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
       setLoading(false);
       alert("Logged in.");
       history.push(`/users`);
     })
    .catch((error) => {
      setLoading(false)
      alert(error.message);
    })
  }
  return(
    <div>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5">Log in</Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.mainDiv}>
        <Grid justifyContent="center" container>
          <Grid md={6} item>
            <Card className={classes.card} raised>
              <BasicTextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <BasicTextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <BasicButton label={loading ? "Loading..." : "Log in"}  onClick={login}/>
              <div className={classes.linkDiv}>
                <Link className={classes.link} to="/signup">Click here to sign up.</Link>
              </div>
            </Card>
          </Grid>
        </Grid>
      </main>
    </div>
  )
}

export {Login};