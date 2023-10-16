import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectJokeByMovieId, selectJokesStatus } from "./aiJokesSlice";

function JokesGenerator({ movieId, movieTitle, movieDescription }) {
  const joke = useSelector((state) => selectJokeByMovieId(state, movieId));
  const jokeStatus = useSelector(selectJokesStatus);

  const handleGenerateJoke = () => {};

  return (
    <Button
      isLoading={jokeStatus === "loading"}
      variant="solid"
      bg="green.300"
      color="white"
      w="100%"
      onClick={handleGenerateJoke}
    >
      {joke ? "Regenarate" : "Generate"} Joke
    </Button>
  );
}

export default JokesGenerator;
