import Button from '@mui/material/Button';

function BasicButton({label, onClick}) {
  return (
      <Button className="profile-button" variant="contained" onClick={onClick}>{label}</Button>
  );
}

export {BasicButton};