import React from "react";
import Link from "next/link";

function Card({ movie }) {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";


  return (
    <div>
      <Link href={"/movies/" + movie.id}>
        <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300" style={{ width: "15rem" }}>
          <div className="absolute top-2 right-2 text-white bg-green-900 rounded-full p-1">{Math.floor(movie.vote_average * 10)}%</div>
          <img
            className="h-auto max-w-full rounded"
            src={IMAGE_BASE_URL + movie.poster_path}
            alt=""
          />

          <div className="card-body">
            {" "}
            <h5 className="m-2 text-center">
              {movie.title ? movie.title : movie.name}
            </h5>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
