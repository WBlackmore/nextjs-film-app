import React from "react";
import { getFilms } from "../../utils/api_calls";
import Card from "../../components/Card";
import SearchResults from "../../components/SearchResults";

async function SearchPage({ searchParams }) {
  const searchText = searchParams.query;
  const movies = await getFilms(searchText);

  return <SearchResults searchText={searchText} movies={movies} />;
}

export default SearchPage;
