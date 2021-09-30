import TextField from '@mui/material/TextField';

function MessageField({label, type, value, onChange}) {
  return (
      <TextField sx={{width: "100%", backgroundColor: "#e57970"}} className="messageField" id="filled-basic" label={label} type={type} value={value} onChange={onChange} variant="filled" />
  );
}

export {MessageField};