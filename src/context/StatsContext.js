import React, { createContext, useContext } from "react";
import { usePokemon } from "./PokemonContext";

const StatsContext = createContext();

export const StatsProvider = ({ children }) => {
  const { pokemonList } = usePokemon();

  const calculateStats = () => {
    if (pokemonList.length === 0) return null;

    const totalPokemon = pokemonList.length;
    const totalTypes = [...new Set(pokemonList.flatMap((p) => p.types.map((t) => t.type.name)))].length;

    return { totalPokemon, totalTypes };
  };

  return (
    <StatsContext.Provider value={{ calculateStats }}>
      {children}
    </StatsContext.Provider>
  );
};

export const useStats = () => useContext(StatsContext);
