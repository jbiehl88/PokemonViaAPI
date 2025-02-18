import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const Squad = ({ squad, removeFromSquad }) => {
  return (
    <Box sx={{ p: 2, backgroundColor: "white", mt: 2, borderRadius: 2 }}>
      <Typography variant="h6" align="center">Pokemon Squad</Typography>
      {squad.length === 0 ? (
        <Typography align="center" sx={{ fontStyle: "italic" }}>Empty</Typography>
      ) : (
        squad.map((pokemon) => (
          <Card key={pokemon.id} sx={{ display: "flex", alignItems: "center", my: 1, p: 1 }}>
            <CardMedia
              component="img"
              image={pokemon.sprites.front_default}
              alt={pokemon.name}
              sx={{ width: 50, height: 50, mr: 2 }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="body1">{pokemon.name}</Typography>
            </CardContent>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => removeFromSquad(pokemon.id)}
            >
              Remove
            </Button>
          </Card>
        ))
      )}

      {squad.length >= 2 && (
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => console.log("Battle Started!")}
          >
            Battle!
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Squad;
