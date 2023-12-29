"use client";
import React, { useState, useEffect } from "react";
import Card from "./Card";

function SearchResults({ searchText, movies }) {
  const [filteredMovies, setfilteredMovies] = useState(movies);

  useEffect(() => {
    setfilteredMovies(movies);
  }, [movies]);

  const filterMovies = (filter) => {
    let sortedMovies = [];

    switch (filter) {
      case "release_year":
        sortedMovies = [...movies].sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );

        break;

      case "popularity":
        sortedMovies = [...movies].sort((a, b) => b.popularity - a.popularity);
        break;

      case "vote_average":
        sortedMovies = [...movies].sort(
          (a, b) => b.vote_average - a.vote_average
        );
        break;

      default:
        sortedMovies = [...movies];
        break;
    }
    setfilteredMovies(sortedMovies);
  };

  return (
    <div className="container mx-auto sm:px-4 my-3">
      <div className="container mx-auto px-4 my-3">
        <h1 className="">Search results for "{searchText}"</h1>
        <select
          onChange={(e) => filterMovies(e.target.value)}
          className="border p-1"
          aria-label="Default select example"
        >
          <option>Sort By</option>
          <option value="release_year">Release Year</option>
          <option value="popularity">Popularity</option>
          <option value="vote_average">Ratings</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {filteredMovies.map((movie) => {
          if(!movie.poster_path) return;
          return <Card key={movie.id} movie={movie}></Card>;
        })}
      </div>
    </div>
  );
}

export default SearchResults;
