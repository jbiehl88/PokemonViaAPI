import React, { createContext, useContext, useState, useEffect } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [types, setTypes] = useState([]);

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

  return (
    <PokemonContext.Provider value={{ pokemonList, search, setSearch, filterType, setFilterType, types }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);
