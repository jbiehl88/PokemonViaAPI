import React, { createContext, useState, useContext } from "react";

const DeckContext = createContext();

export const DeckProvider = ({ children }) => {
  const [deck, setDeck] = useState([]);

  const addToDeck = (pokemon) => {
    if (!deck.find((p) => p.id === pokemon.id)) {
      setDeck([...deck, pokemon]);
    }
  };

  const removeFromDeck = (id) => {
    setDeck(deck.filter((pokemon) => pokemon.id !== id));
  };

  return (
    <DeckContext.Provider value={{ deck, addToDeck, removeFromDeck }}>
      {children}
    </DeckContext.Provider>
  );
};

export const useDeck = () => useContext(DeckContext);
