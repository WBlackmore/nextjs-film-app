import { getFilmInfo, getSimilarFilms } from "../../utils/api_calls";
import React from "react";
import Card from "../../components/Card";

async function MovieDetailsPage({ params }) {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  const movieDetails = await getFilmInfo(params.id);
  const similarMovies = await getSimilarFilms(params.id);

  return (
    <div className="my-4">
      <div className="flex flex-col gap-3 mx-4 sm:mx-8 mb-12 sm:flex-row">
        <img
          className="h-auto max-w-64 rounded mx-auto"
          src={IMAGE_BASE_URL + movieDetails.poster_path}
          alt="/"
        />

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">{movieDetails.title}</h3>
          <div className="">
            <p className="">Release date: {movieDetails.release_date}</p>
          </div>
          <div></div>
          <p>{movieDetails.overview}</p>
          <p>
            {movieDetails.genres &&
              movieDetails.genres.map((genre) => {
                return (
                  <span
                    className="bg-yellow-200 rounded-lg p-2 mr-2"
                    key={genre.id}
                  >
                    {genre.name}
                  </span>
                );
              })}
          </p>
        </div>
      </div>

      {/* Similar films you may also like */}
      <div className="container mx-auto sm:px-4 my-3">
        <h2 className="text-xl font-bold m-2">You may also like</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {!similarMovies.length
            ? "There are no recomendations for this title"
            : similarMovies.map((movie) => {
                if (!movie.poster_path) return;
                return <Card movie={movie} />;
              })}
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
