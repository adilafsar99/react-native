import Avatar from '@mui/material/Avatar';

function ImageAvatar({width, height, src}) {
  return (
      <Avatar sx={{width:{width}, height:{height}}} alt="Travis Howard" src={src} />
  );
}

export {ImageAvatar};