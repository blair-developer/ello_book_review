import React from 'react'
import { TextField } from '@material-ui/core';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <TextField
          label="Search Books"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      );
}

export default SearchBar;

