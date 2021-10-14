import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function Tags({users, setMembers}) {
  return (
      <Autocomplete
        multiple
        id="tags-outlined"
        options={users}
        getOptionLabel={(option) => option?.firstName + " " + option?.lastName}
        filterSelectedOptions
        onChange={(event, value) => {
            setMembers(value);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{backgroundColor: "#ec9e9e", borderRadius: "4px"}}
            label="Select Members"
            placeholder="Members"
          />
        )}
      />
  );
}