import React, { createContext, useState, useContext } from "react";

const SquadContext = createContext();

export const useSquad = () => useContext(SquadContext);

export const SquadProvider = ({ children }) => {
  const [squad, setSquad] = useState([]);

  const addToSquad = (pokemon) => {
    if (squad.length < 7 && !squad.some((p) => p.id === pokemon.id)) {
      setSquad([...squad, pokemon]);
    }
  };

  const removeFromSquad = (pokemonId) => {
    setSquad(squad.filter((p) => p.id !== pokemonId));
  };

  return (
    <SquadContext.Provider value={{ squad, addToSquad, removeFromSquad }}>
      {children}
    </SquadContext.Provider>
  );
};
