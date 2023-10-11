import { Link } from "react-router-dom";
import { data } from "./data";
import MovieCard from "./MovieCard";

function MoviesList() {
  return (
    <div>
      {data.results.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          {movie.title}
          <MovieCard />
        </Link>
      ))}
    </div>
  );
}

export default MoviesList;
