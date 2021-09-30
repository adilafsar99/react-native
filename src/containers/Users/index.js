import {MenuAppBar} from "./components/MenuAppBar";
import Grid from "@mui/material/Grid";
import {ImageAvatar} from './components/Avatar';
import Typography from "@mui/material/Typography"
import {useStyles} from "./style.js";
import {useState} from "react";
import {db, collection, getDocs} from "../../config/Firebase/Firebase.js";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";

const Users = () => {
  const classes = useStyles();
  const [users, setUsers] = useState("");
  let response;
  useEffect(async () => {
    response = await getDocs(collection(db, "Users"));
  }, []);
  const history = useHistory();
  const showChat = () => {
    history.push("/chat");
  }
  return (
   <>
    <div>
      <MenuAppBar />
    </div>
    <div>
      <Grid className={classes.container} container>
      
      {users && users.ForEach((user) => <Grid className={classes.item} onClick={() => showChat()} item>
          <ImageAvatar src={user.data().src || ""}/>
          <Typography className={classes.username} variant="h6">
            {`${user.data().firstName} ${user.data().lastName}` || "Muhammad Adil"}
          </Typography>
        </Grid>)}
        
        <Grid className={classes.item} onClick={() => showChat()} item>
          <ImageAvatar src={users ? users : ""}/>
          <Typography className={classes.username} variant="h6">
            {users ? users : "Muhammad Adil"}
          </Typography>
        </Grid>
        <Grid className={classes.item} item>
          <ImageAvatar src={users ? users : ""}/>
          <Typography className={classes.username} variant="h6">
            {users ? users : "Muhammad Hashir"}
          </Typography>
        </Grid>
        <Grid className={classes.item} item>
          <ImageAvatar src={users ? users : ""}/>
          <Typography className={classes.username} variant="h6">
            {users ? users : "Muhammad Afsar"}
          </Typography>
        </Grid>
        <Grid className={classes.item} item>
          <ImageAvatar src={users ? users : ""}/>
          <Typography className={classes.username} variant="h6">
            {users ? users : "Muhammad Adil"}
          </Typography>
        </Grid>
        <Grid className={classes.item} item>
          <ImageAvatar src={users ? users : ""}/>
          <Typography className={classes.username} variant="h6">
            {users ? users : "Muhammad Adil"}
          </Typography>
        </Grid>
        <Grid className={classes.item} item>
          <ImageAvatar src={users ? users : ""}/>
          <Typography className={classes.username} variant="h6">
            {users ? users : "Muhammad Adil"}
          </Typography>
        </Grid>
        <Grid className={classes.item} item>
          <ImageAvatar src={users ? users : ""}/>
          <Typography className={classes.username} variant="h6">
            {users ? users : "Muhammad Adil"}
          </Typography>
        </Grid>
        <Grid className={classes.item} item>
          <ImageAvatar src={users ? users : ""}/>
          <Typography className={classes.username} variant="h6">
            {users ? users : "Muhammad Adil"}
          </Typography>
        </Grid>
        <Grid className={classes.item} item>
          <ImageAvatar src={users ? users : ""}/>
          <Typography className={classes.username} variant="h6">
            {users ? users : "Muhammad Adil"}
          </Typography>
        </Grid>
      </Grid>
    </div>
  </>
  )
}

export {Users};