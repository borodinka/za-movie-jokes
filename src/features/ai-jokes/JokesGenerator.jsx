import { Button, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJoke,
  selectJokeByMovieId,
  selectJokesStatus,
} from "./aiJokesSlice";

function JokesGenerator({ movieId, movieTitle, movieDescription }) {
  const toast = useToast();
  const dispatch = useDispatch();
  const joke = useSelector((state) => selectJokeByMovieId(state, movieId));
  const jokeStatus = useSelector(selectJokesStatus);

  const handleGenerateJoke = async () => {
    try {
      await dispatch(
        fetchJoke({ movieId, movieTitle, movieDescription })
      ).unwrap();
    } catch (err) {
      toast({
        title: "Failed to load joke",
        description:
          "Please refresh the page and check your internet connection",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

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
