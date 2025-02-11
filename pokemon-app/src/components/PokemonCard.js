import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const PokemonCard = ({ pokemon }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <CardContent>
          <Typography variant="h6">{pokemon.name}</Typography>
          <Typography variant="body2">
            {pokemon.types.map((t) => t.type.name).join(", ")}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PokemonCard;