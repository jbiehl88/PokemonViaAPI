import React, { useState } from "react";
import { Box, Typography, Select, MenuItem, Grid } from "@mui/material";

const StatsView = ({ pokemonList }) => {
  const [selectedPokemon1, setSelectedPokemon1] = useState(null);
  const [selectedPokemon2, setSelectedPokemon2] = useState(null);

  const getStats = (pokemon) => {
    return pokemon
      ? pokemon.stats.map((stat) => `${stat.stat.name}: ${stat.base_stat}`).join(", ")
      : "";
  };

  return (
    <Box sx={{ mt: 3, p: 2, border: "1px solid #ddd", borderRadius: 2, backgroundColor: "white" }}>
      <Typography variant="h5" gutterBottom>
        Compare Pokémon Stats
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Select
            fullWidth
            value={selectedPokemon1 || ""}
            onChange={(e) => setSelectedPokemon1(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">Select Pokémon</MenuItem>
            {pokemonList.map((pokemon) => (
              <MenuItem key={pokemon.id} value={pokemon}>
                {pokemon.name}
              </MenuItem>
            ))}
          </Select>
          <Typography mt={2}>{getStats(selectedPokemon1)}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Select
            fullWidth
            value={selectedPokemon2 || ""}
            onChange={(e) => setSelectedPokemon2(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">Select Pokémon</MenuItem>
            {pokemonList.map((pokemon) => (
              <MenuItem key={pokemon.id} value={pokemon}>
                {pokemon.name}
              </MenuItem>
            ))}
          </Select>
          <Typography mt={2}>{getStats(selectedPokemon2)}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatsView;
