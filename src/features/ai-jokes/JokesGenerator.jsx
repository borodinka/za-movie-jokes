import { Button } from "@chakra-ui/react";

function JokesGenerator({ movieId, movieTitle, movieDescription }) {
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
