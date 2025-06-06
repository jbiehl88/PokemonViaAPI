import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { usePokemon } from "../context/PokemonContext";
import { useSquad } from "../context/SquadContext";
import { useDeck } from "../context/DeckContext";

const PokemonList = () => {
  const { pokemonList, search, filterType } = usePokemon();
  const { squad, addToSquad } = useSquad();
  const { addToDeck } = useDeck();

  const filteredPokemon = pokemonList.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterType ? pokemon.types.some((t) => t.type.name === filterType) : true)
  );

  return (
    <Grid container spacing={2} data-testid="pokemon-list">
      {filteredPokemon.map((pokemon) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.id}>
          <Card>
            <CardMedia component="img" height="140" image={pokemon.sprites.front_default} alt={pokemon.name} />
            <CardContent>
              <Typography variant="h6">{pokemon.name}</Typography>
              <Typography variant="body2">
                {pokemon.types.map((t) => t.type.name).join(", ")}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                data-testid="add-to-deck-button"
                onClick={() => addToDeck(pokemon)}
                sx={{ mt: 1, width: "150px", height: "40px" }}
              >
                Add to Deck
              </Button>
              <Button
                sx={{ mt: 1, width: "150px", height: "40px" }}
                variant="contained"
                color="primary"
                size="small"
                onClick={() => addToSquad(pokemon)}
                disabled={squad.length >= 6}
              >
                {squad.length >= 6 ? "Squad Full" : "Add to Squad"}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PokemonList;

