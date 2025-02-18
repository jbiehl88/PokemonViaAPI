import React from "react";
import { FormControl, InputLabel, MenuItem, Select, Box } from "@mui/material";
import { usePokemon } from "../context/PokemonContext";

const TypeFilter = () => {
  const { filterType, setFilterType, types } = usePokemon();

  return (
    <Box
      sx={{ 
          backgroundColor: "white", 
          padding: 2, 
          borderRadius: 2, 
          boxShadow: 1, 
          marginBottom: 2, 
      }}
    >
      <FormControl fullWidth margin="normal">
        <InputLabel>Filter by Type</InputLabel>
        <Select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <MenuItem value="">All Types</MenuItem>
          {types.map((type) => (
            <MenuItem key={type} value={type}>{type}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default TypeFilter;
