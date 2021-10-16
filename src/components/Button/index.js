import Button from '@material-ui/core/Button';
import "./css/style.css"

function BasicButton({buttonStyles, label, type, onClick}) {
  return (
      <Button style={buttonStyles} className="button" variant="contained" type={type} onClick={onClick} >{label}</Button>
  );
}

export default BasicButton;