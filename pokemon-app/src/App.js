import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import StatsView from "./components/StatsView";
import Deck from "./components/Deck";
import PokemonList from "./components/PokemonList";
import TypeFilter from "./components/TypeFilter";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [types, setTypes] = useState([]);
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then(async (data) => {
        const detailedPokemon = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );
        setPokemonList(detailedPokemon);
        const allTypes = [...new Set(detailedPokemon.flatMap((p) => p.types.map((t) => t.type.name)))];
        setTypes(allTypes);
      });
  }, []);

  const addToDeck = (pokemon) => {
    if (!deck.find((p) => p.id === pokemon.id)) {
      setDeck([...deck, pokemon]);
    }
  };

  const removeFromDeck = (id) => {
    setDeck(deck.filter((pokemon) => pokemon.id !== id));
  };

  return (
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
          <Deck deck={deck} removeFromDeck={removeFromDeck} />
        </Box>
        <Box sx={{ flex: "2", overflowY: "auto", p: 2 }}>
          <SearchBar search={search} setSearch={setSearch} />
          <TypeFilter filterType={filterType} setFilterType={setFilterType} types={types} />
          <PokemonList pokemonList={pokemonList} search={search} filterType={filterType} addToDeck={addToDeck} />
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
        <StatsView pokemonList={pokemonList} />
        </Box>
      </Box>
    </Box>

  );
};

export default App;
