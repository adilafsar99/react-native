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
import {auth, createUserWithEmailAndPassword, db, collection, doc, setDoc} from "../../config/Firebase/Firebase.js";

const Signup = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const obj = {
    firstName,
    lastName,
    username,
    email
  }
  let history = useHistory();
  const register = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Authenticated");
      const usersCol = collection(db, "Users");
      const userDoc = doc(usersCol, `${userCredential.user.uid}`);
      setDoc(userDoc, obj)
      .then(() => {
        setLoading(false);
        alert("Registered.");
        history.push("/profile");
      })
    })
    .catch((error) => {
      setLoading(false);
      alert(error.message);
    })
  }
  return(
    <div>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5">Sign up</Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.mainDiv}>
        <Grid justifyContent="center" container>
          <Grid md={6} item>
            <Card className={classes.card} raised>
              <BasicTextField label="First Name" type="email" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <BasicTextField label="Last Name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              <BasicTextField label="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              <BasicTextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <BasicTextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <BasicButton label={loading ? "Loading..." : "Register"}  onClick={register}/>
              <div className={classes.linkDiv}>
                <Link className={classes.link} to="/">Click here to log in.</Link>
              </div>
            </Card>
          </Grid>
        </Grid>
      </main>
    </div>
  )
}

export {Signup};