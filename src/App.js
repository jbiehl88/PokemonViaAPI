import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import StatsView from "./components/StatsView";
import Deck from "./components/Deck";
import PokemonList from "./components/PokemonList";
import TypeFilter from "./components/TypeFilter";
import Squad from "./components/Squad";

import { SquadProvider } from "./context/SquadContext";
import { PokemonProvider } from "./context/PokemonContext";
import { DeckProvider } from "./context/DeckContext";
import { StatsProvider } from "./context/StatsContext";

const App = () => {

  return (
    <SquadProvider>
      <PokemonProvider>
      <DeckProvider>
      <StatsProvider>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            flex: 1,
            width: "99vw",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              flex: "1",
              minWidth: "250px",
              overflowY: "auto",
              backgroundColor: "rgba(0, 0, 0, 0)",
              p: 2,
              color: "black",
              order: { xs: 2, md: 0 },
            }}
          >
            <Deck />
          </Box>
          <Box sx={{ flex: "2", overflowY: "auto", p: 2 }}>
            <SearchBar />
            <TypeFilter />
            <PokemonList />
          </Box>
          <Box
            sx={{
              flex: "1",
              minWidth: "250px",
              overflowY: "auto",
              backgroundColor: "rgba(0, 0, 0, 0)",
              p: 2,
              order: { xs: 3, md: 1 },
            }}
          >
            <StatsView />
            <Squad />
          </Box>
        </Box>
      </Box>
      </StatsProvider>
      </DeckProvider>
      </PokemonProvider>
    </SquadProvider>
  );
};

export default App;
