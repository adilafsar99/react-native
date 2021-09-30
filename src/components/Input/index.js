import TextField from '@mui/material/TextField';

function BasicTextField({label, type, value, onChange}) {
  return (
      <TextField sx={{marginBottom: "20px", backgroundColor: "#ec9e9e", borderRadius: "5px"}} className="input-field" id="outlined-basic" label={label} type={type} value={value} onChange={onChange} variant="outlined" fullWidth autoComplete />
  );
}

export {BasicTextField};