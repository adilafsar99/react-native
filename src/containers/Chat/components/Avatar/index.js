import Avatar from '@mui/material/Avatar';

function ImageAvatar({width, height, src}) {
  return (
      <Avatar sx={{width:{width}, height:{height}}} alt="User Avatar" src={src} />
  );
}

export {ImageAvatar};