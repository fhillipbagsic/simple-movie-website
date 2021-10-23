import styled from "styled-components";
import { posterPath } from "../../utils/api";

const MovieWrapper = styled.div`
  text-decoration: none;
  cursor: pointer;
`;

const MovieItem = styled.div`
  position: relative;
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  border-radius: 10px;
`;

const WatchlistButton = styled.button`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 18px auto;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  background-color: #6e7b83;
  border: none;
  border-radius: 5px;
  width: 90%;
  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    transform: translate(0, -5%);
  }
`;

const Rating = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  background: #ddb658;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 8px;
  margin-top: 6px;
  font-size: 14px;
  font-weight: 700;
`;
const Details = styled.p`
  color: #6b7481;
  margin: 0;
`;
const Title = styled.h3`
  color: #cad5dd;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

function Item({ id, title, poster_path, release_date, vote_average }) {
  const handleMovieClick = () => {
    window.location = `/movie/${id}`;
  };
  const handleButtonClick = (event) => {
    event.stopPropagation();
  };

  return (
    <MovieWrapper onClick={handleMovieClick}>
      <MovieItem>
        <Rating>{vote_average}</Rating>
        <Poster src={`${posterPath}${poster_path}`} alt="movie poster" />
        <WatchlistButton onClick={(event) => handleButtonClick(event)}>
          Add to Watchlist
        </WatchlistButton>
      </MovieItem>
      <Details>{formatDate(release_date)} • Fantasy/Thriller</Details>
      <Title>{title}</Title>
    </MovieWrapper>
  );
}

function formatDate(date) {
  let new_date = date.split("-");
  return new_date[0];
}
export default Item;
