import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#df4830"
  },
  mainDiv: {
    marginTop: "80px",
    display: "flex",
    justifyContent: "center"
  },
  profile: {
    borderTop: "3px solid #a33030",
    borderBottom: "3px solid #a33030",
    paddingTop: "5px",
    color: "#792121"
  },
  button: {
    marginTop: "8px"
  }
}))

export {useStyles};