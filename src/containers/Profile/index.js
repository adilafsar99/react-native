import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {useStyles} from "./styles.js";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import {BasicTextField} from "../../components/Input";
import {BasicButton} from "./components/Button";
import {ImageAvatar} from './components/Avatar';
import {Link} from 'react-router-dom';
import "./components/Button/css/style.css";
import {auth, onAuthStateChanged, signOut, db, doc, getDoc} from "../../config/Firebase/Firebase.js";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [docSnap, setDocSnap] = useState(false);
  useEffect(() => {
    setLoading(true);
    let docSnapshot;
   onAuthStateChanged(auth, async (user) => {
    if (user) {
      setLoading(false);
      const docRef = doc(db, "Users", `${user.uid}`);
      docSnapshot = await getDoc(docRef);
      setDocSnap(docSnapshot);
    }
  })
  }, [])
  const classes = useStyles();
  let history = useHistory();
  const logout = () => {
    setLoading(true);
    signOut(auth)
    .then(() => {
      setLoading(false);
      alert("Logged out.");
      history.push("/");
    })
  }
  return(
    <div>
      <AppBar>
        <Toolbar class={classes.toolbar}>
          <Typography variant="h5">Profile</Typography>
          <BasicButton label={loading ? "..." : "Log out"} onClick={logout} />
        </Toolbar>
      </AppBar>
      <main className={classes.mainDiv}>
        <Grid sm={12} md={5} container>
          <Grid className={classes.profile} sm={12} justifyContent="space-around" container>
            <Grid className={classes.gridItem} sm={6} item>
              <ImageAvatar width={120} height={120} src={loading ? "Loading..." : "Image"} />
            </Grid>
            <Grid className={classes.gridItem} sm={6} item >
              <div>
                <Typography variant="h6">First Name</Typography>
                <Typography variant="p">{loading ? "Loading..." : docSnap && docSnap.data().firstName}</Typography>
              </div>
              <div>
                <Typography variant="h6">Last Name</Typography>
                <Typography variant="p">{loading ? "Loading..." : docSnap && docSnap.data().lastName}</Typography>
              </div>
              <div>
                <Typography variant="h6">Username</Typography>
                <Typography variant="p">{loading ? "Loading..." : docSnap && docSnap.data().username}</Typography>
              </div>
              <div>
                <Typography variant="h6">Email</Typography>
                <Typography variant="p">{loading ? "Loading..." : docSnap && docSnap.data().email}</Typography>
              </div>
              <div>
                <Typography variant="h6">Password</Typography>
                <Typography variant="p">{loading ? "Loading..." : "••••••••"}</Typography>
              </div>
            </Grid>
          </Grid>
          <Grid className={classes.button} sm={12} justifyContent="center" container>
            <BasicButton label="Edit Profile" />
          </Grid>
        </Grid>
      </main>
    </div>
    )
}

export {Profile};