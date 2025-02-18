# PokemonViaAPI

## Description

PokemonViaAPI is a React-based web application that fetches data from the PokeAPI to display the first 151 Pokémon. The app allows users to search, filter, and view detailed statistics for each Pokémon. The UI is built with Material-UI for a modern and responsive design.

## Features

* Search & Filter: Users can search for Pokémon by name and filter them by type.

* Deck Management: A deck system allows users to select and manage Pokémon.

* Stats View: View detailed stats for each Pokémon.

* Context API: Uses React Context API to manage application state.

* Material-UI Styling: Provides a sleek and responsive user interface.

* Background Theme: Custom background image applied for a visually appealing design.

## Installation

### Prerequisites

Node.js (>= 14.x recommended)

npm or yarn

### Steps

1. Clone the repository:

``` git clone https://github.com/jbiehl88/PokemonViaAPI.git ```

2. Navigate to the project folder:

``` cd PokemonViaAPI ```

3. Install dependencies:

``` npm install ```

or

``` yarn install ```

4. Start the development server:

``` npm start ```

or

``` yarn start ```

## Usage

* Use the Search Bar to find a specific Pokémon.

* Use the Type Filter to filter Pokémon by their type.

* Click on a Pokémon to view its detailed stats.

* Manage your Deck by adding Pokémon for reference.

## Technologies Used

* React (with Hooks & Context API)

* Material-UI for styling

* PokeAPI for fetching Pokémon data

* JavaScript (ES6+)

* CSS for additional styling

## File Structure

```
PokemonViaAPI/
├── public/
├── src/
│   ├── components/    # UI Components (SearchBar, StatsView, Deck, etc.)
│   ├── context/       # React Context Providers (PokemonContext, DeckContext, etc.)
│   ├── assets/        # Images and static files
│   ├── App.js         # Main application file
│   ├── index.js       # Entry point
│   ├── styles.css     # Global styles
└── README.md          # Project documentation
```

## API Reference

This project utilizes the PokeAPI:

* Pokémon list: https://pokeapi.co/api/v2/pokemon?limit=151

* Pokémon details: https://pokeapi.co/api/v2/pokemon/{id}

## Future Improvements

* Add pagination for Pokémon list

* Implement local storage for user preferences

* Improve animations and UI responsiveness

## Author

Jordan Biehl
[GitHub Profile](https://github.com/jbiehl88)


