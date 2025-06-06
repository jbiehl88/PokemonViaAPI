import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { useDeck } from "../context/DeckContext";

const Deck = () => {
  const { deck, removeFromDeck } = useDeck();
  return (
    <Box sx={{ flex: "1", minWidth: "250px", overflowY: "auto", backgroundColor: "white", mt: 3, borderRadius: 2, color: "black", p: 2 }} data-testid="deck">
      <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
        Your Deck
      </Typography>

      {deck.length === 0 ? (
        <Typography variant="body1" sx={{ textAlign: "center", fontStyle: "italic" }}>
          Empty
        </Typography>
      ) : (
        deck.map((pokemon) => (
          <Card key={pokemon.id} sx={{ mb: 2 }}>
            <CardMedia component="img" height="100" image={pokemon.sprites.front_default} alt={pokemon.name} />
            <CardContent>
              <Typography variant="h6">{pokemon.name}</Typography>
              <Button variant="contained" color="error" data-testid="remove-from-deck-button" onClick={() => removeFromDeck(pokemon.id)}>
                Remove
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
};

export default Deck;

