# usePopcorn

usePopcorn is a movie search and rating application built with React. It allows users to search for movies, view details, rate movies, and keep track of watched movies.
## URL - https://nmnkumar.github.io/usepopcorn/

## Features

- Search for movies using the OMDB API
- View movie details
- Rate movies with a star rating system
- Save watched movies to local storage
- View a summary of watched movies with average ratings and runtime
- Delete movies from the watched list

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/usePopcorn.git
    cd usePopcorn
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

## Usage

1. Enter a movie name in the search bar to find movies.
2. Click on a movie from the search results to view its details.
3. Rate the movie using the star rating component.
4. Add the movie to your watched list by clicking the "Add to list" button.
5. View and manage your watched movies list from the main screen.

## Components

- **App**: Main component that handles the state and rendering of the application.
- **NavBar**: Navigation bar containing the search input and number of results.
- **Search**: Search input component.
- **NumResults**: Displays the number of search results.
- **Main**: Main container for the application content.
- **Box**: Toggleable container component.
- **MovieList**: Displays a list of movie search results.
- **Movie**: Individual movie item in the search results.
- **MovieDetails**: Displays detailed information about a selected movie, allows for rating and adding to watched list.
- **WatchedSummary**: Displays a summary of watched movies with average ratings and runtime.
- **WatchedMoviesList**: Displays a list of watched movies.
- **WatchedMovie**: Individual movie item in the watched list.
- **Loader**: Loading spinner component.
- **ErrorMessage**: Displays an error message.
- **StarRating**: Star rating component for rating movies.

## Custom Hooks

- **useMovies**: Fetches movie data from the OMDB API based on a search query.
- **useLocalStorageState**: Custom hook for managing state with local storage.

## Configuration

Replace the `KEY` variable in `App.js` with your OMDB API key.

```javascript
const KEY = "your-omdb-api-key";
