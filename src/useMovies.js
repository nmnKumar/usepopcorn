import { useState, useEffect } from "react";
export function useMovies(query) {
  const KEY = "3a2b28f6";
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  const controller = new AbortController();

  useEffect(
    function () {
      async function getMovies() {
        setIsLoading(true);
        try {
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");
          const data = await res.json();

          if (data.Response === "False") {
            throw new Error("No Movies found with this name");
          }
          setMovies(data.Search);
          setError("");
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      getMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
