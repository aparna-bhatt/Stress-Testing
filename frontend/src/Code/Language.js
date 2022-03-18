import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({lang,setLang}) {
 

  const handleChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl >
        <InputLabel id="lang-select-label">Language</InputLabel>
        <Select
          labelId="lang-select-label"
          id="lang-select"
          value={lang}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value={"c"}>C</MenuItem>
          <MenuItem value={"cpp"}>C++</MenuItem>
          <MenuItem value={"python3"}>Python</MenuItem>
          <MenuItem value={"java"}>Java</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
