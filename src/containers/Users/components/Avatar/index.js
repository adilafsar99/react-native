import Avatar from '@mui/material/Avatar';

function ImageAvatar({width, height, src}) {
  return (
      <Avatar sx={{width:{width}, height:{height}}} src={src} alt="User Avatar" />
  );
}

export {ImageAvatar};