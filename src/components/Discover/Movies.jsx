import { useEffect, useState } from "react";
import styled from "styled-components";
import { discoverURL } from "../../utils/api";
import Item from "./Item";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1.5rem;
  margin: 2rem;
`;

function Movies({ filter }) {
  const [discover, setDiscover] = useState(null);

  useEffect(() => {
    console.log(filter);
    fetch(discoverURL)
      .then((response) => response.json())
      .then((json) => setDiscover(json.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Grid>
      {discover &&
        discover
          .sort(filterMovie(filter))
          .map((movie) => (
            <Item
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
            />
          ))}
    </Grid>
  );
}

function filterMovie(filter) {
  switch (filter) {
    case "mostpopular":
      return (a, b) => b.popularity - a.popularity;
    case "leastpopular":
      return (a, b) => a.popularity - b.popularity;
    case "newest":
      return (a, b) =>
        String(a.release_date).split("-").join("") -
        String(b.release_date).split("-").join("");
    case "oldest":
      return (a, b) =>
        String(b.release_date).split("-").join("") -
        String(a.release_date).split("-").join("");
    case "highestrating":
      return (a, b) => b.vote_average - a.vote_average;
    case "lowestrating":
      return (a, b) => a.vote_average - b.vote_average;
    default:
      return false;
  }
}
export default Movies;
