import React from "react";
import { TextField, Box } from "@mui/material";

const SearchBar = ({ search, setSearch }) => {
  return (
    <Box
    sx={{ 
        backgroundColor: "white", 
        padding: 2, 
        borderRadius: 2, 
        boxShadow: 1,
        marginTop: 1,
        marginBottom: 1, 
      }}
    >
        <TextField
        label="Search Pokémon"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
    </Box>
  );
};

export default SearchBar;