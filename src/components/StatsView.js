import React, { useState } from "react";
import { Box, Typography, Select, MenuItem, Grid } from "@mui/material";
import { usePokemon } from "../context/PokemonContext";

const StatsView = () => {
  const { pokemonList, loading, error } = usePokemon();
  const [selectedPokemon1, setSelectedPokemon1] = useState("");
  const [selectedPokemon2, setSelectedPokemon2] = useState("");

  const getStats = (pokemon) => {
    return pokemon
      ? pokemon.stats.map((stat) => `${stat.stat.name}: ${stat.base_stat}`).join(", ")
      : "";
  };

  if (loading) return <Typography>Loading Pokémon...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;

  return (
    <Box sx={{ mt: 3, p: 2, border: "1px solid #ddd", borderRadius: 2, backgroundColor: "white" }}>
      <Typography variant="h5" gutterBottom>
        Compare Pokémon Stats
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Select
            fullWidth
            value={selectedPokemon1}
            onChange={(e) => setSelectedPokemon1(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">Select Pokémon</MenuItem>
            {pokemonList.map((pokemon) => (
              <MenuItem key={pokemon.id} value={pokemon.name}>
                {pokemon.name}
              </MenuItem>
            ))}
          </Select>
          <Typography mt={2}>
            {getStats(pokemonList.find((p) => p.name === selectedPokemon1))}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Select
            fullWidth
            value={selectedPokemon2}
            onChange={(e) => setSelectedPokemon2(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">Select Pokémon</MenuItem>
            {pokemonList.map((pokemon) => (
              <MenuItem key={pokemon.id} value={pokemon.name}>
                {pokemon.name}
              </MenuItem>
            ))}
          </Select>
          <Typography mt={2}>
            {getStats(pokemonList.find((p) => p.name === selectedPokemon2))}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatsView;

