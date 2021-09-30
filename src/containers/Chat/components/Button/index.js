import Button from '@mui/material/Button';
import SendIcon from "@mui/icons-material/Send";

function SendButton({icon, type, onClick}) {
  return (
      <Button sx={{height: "100%", backgroundColor: "#e57970"}} className="sendButton" variant="contained" type={type} onClick={onClick} ><SendIcon /></Button>
  );
}

export {SendButton};