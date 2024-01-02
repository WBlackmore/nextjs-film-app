import { getTrendingFilms } from "./utils/api_calls";
import Card from "./components/Card";

export default async function HomePage() {
  const movies = await getTrendingFilms();

  return (
    <div className="container mx-auto sm:px-4 my-3">
      <h1 className="text-xl font-bold m-2">Trending</h1>
      <div className="flex flex-wrap gap-2 justify-center">
        {movies.map((movie) => {
          return <Card movie={movie} />;
        })}
      </div>
    </div>
  );
}
