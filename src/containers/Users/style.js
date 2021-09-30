import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "8px",
    overflow: "scroll"
  },
  item: {
    width: "100%",
    height: "55px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "6px",
    "&:hover": {
      border: "2px solid #ffffff"
    },
    backgroundColor: "#df4830"
  },
  username: {
    color: "#ffffff",
    paddingLeft: "5px"
  }
}))

export {useStyles};