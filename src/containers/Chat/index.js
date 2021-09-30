import {useEffect, useState} from "react";
import {useStyles} from "./style.js";
import {MenuAppBar} from "./components/MenuAppBar";
import {MessageField} from "./components/Input";
import {SendButton} from "./components/Button";
import Grid from "@mui/material/Grid";

const Chat = () => {
  const classes = useStyles();
  const [message, setMessage] = useState("");
  return (
    <>
      <div>
        <MenuAppBar />
      </div>
      <div>
        <Grid className={classes.container} container>
          
        </Grid>
      </div>
      <div>
        <Grid justifyContent="center" className={classes.messageDiv} container>
          <Grid xs={9} item>
            <MessageField label="Enter message..." type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
          </Grid>
          <Grid xs={2} item>
            <SendButton />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export {Chat};