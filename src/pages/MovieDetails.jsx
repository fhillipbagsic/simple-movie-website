import styled from "styled-components";
import NavBar from "../components/NavBar";
import MaxContainer from "../components/MaxContainer";
import { StarIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
import {
  HBOButton,
  HuluButton,
  NetflixButton,
  PrimeVideoButton,
  PrimeVideoText,
  WatchlistButton,
  YoutubeButton,
  YoutubeText,
} from "../components/MovieDetails/Buttons";
import {
  MovieItem,
  Suggestion,
  SuggestionsGrid,
} from "../components/MovieDetails/Suggestion";
import {
  Details,
  Genre,
  Length,
  Overview,
  Poster,
  PosterWrapper,
  RatingScore,
  ReleaseDate,
  StaffName,
  StaffRole,
  StaffWrapper,
  StarWrapper,
  Title,
  TitleWrapper,
} from "../components/MovieDetails/Details";
import {
  movieDetailsData as movie,
  movieSuggestionsData as suggestions,
} from "../data";
import {
  CastContainer,
  CastImage,
  CastItem,
  CastLabel,
  CastName,
  CastRole,
} from "../components/MovieDetails/Casts";
import {
  InfoContainer,
  InfoDetail,
  InfoTitle,
  Keyword,
  KeywordWrapper,
} from "../components/MovieDetails/Informations";

const PosterBackground = styled.div`
  position: relative;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${movie.poster_path});
    background-size: cover;
    background-position: top;
  }
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  padding-bottom: 2rem;
  padding-top: ${(props) => props.pt || 0}rem;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Watch = styled.p`
  color: #6b7481;
  font-size: 14px;
  font-weight: 600;
`;

function MovieDetails() {
  return (
    <>
      {/* navbar */}
      <NavBar />
      <PosterBackground>
        <MaxContainer>
          <Wrapper pt="3">
            {/* movie poster */}
            <PosterWrapper>
              <Poster src={movie.poster_path} />
              {/* button */}
              <WatchlistButton>Add to watchlist</WatchlistButton>
            </PosterWrapper>
            <Details>
              {/* movie title and rating */}
              <TitleWrapper>
                <Title>{movie.title}</Title>
                <StarWrapper>
                  <StarIcon />
                </StarWrapper>
                <RatingScore>{movie.rating_score}</RatingScore>
              </TitleWrapper>
              {/* movie genre */}
              {movie.genre.map((genre, id) => (
                <Genre key={id}>
                  {genre}
                  {","} &nbsp;
                </Genre>
              ))}
              {/* movie length */}
              <Length>&nbsp;{movie.movie_length}</Length>
              {/* release date */}
              <ReleaseDate>Released on {movie.release_date}</ReleaseDate>
              {/* movie overview */}
              <Overview>{movie.overview}</Overview>
              {/* movie staffs */}
              {movie.staffs.map((staff, index) => (
                <StaffWrapper key={index}>
                  <StaffName>{staff.name}</StaffName>
                  <StaffRole>{staff.role}</StaffRole>
                </StaffWrapper>
              ))}
              {/* movie provider buttons */}
              <Watch>Where to watch</Watch>
              <NetflixButton>Netflix</NetflixButton>
              <PrimeVideoButton>
                Prime <PrimeVideoText>Video</PrimeVideoText>
              </PrimeVideoButton>
              <HuluButton>Hulu</HuluButton>
              <HBOButton>HBO Max</HBOButton>
              <YoutubeButton>
                YT <YoutubeText>Trailer</YoutubeText>{" "}
              </YoutubeButton>
            </Details>
          </Wrapper>
        </MaxContainer>
      </PosterBackground>
      <MaxContainer>
        {/* casts */}
        <CastLabel>Top Billed Cast</CastLabel>
        <Wrapper>
          <CastContainer>
            {movie.casts.map((cast, index) => (
              <CastItem key={index}>
                <CastImage src={cast.image_path} />
                <CastName>{cast.name}</CastName>
                <CastRole>{cast.role}</CastRole>
              </CastItem>
            ))}
          </CastContainer>
          <InfoContainer>
            <InfoTitle>Status</InfoTitle>
            <InfoDetail>{movie.status}</InfoDetail>
            <InfoTitle>Original Language</InfoTitle>
            <InfoDetail>{movie.original_language}</InfoDetail>
            <InfoTitle>Budget</InfoTitle>
            <InfoDetail>{movie.budget}</InfoDetail>
            <InfoTitle>Revenue</InfoTitle>
            <InfoDetail>{movie.revenue}</InfoDetail>
            <InfoTitle>Keywords</InfoTitle>
            <KeywordWrapper>
              {movie.keywords.map((keyword, index) => (
                <Keyword key={index}>{keyword}</Keyword>
              ))}
            </KeywordWrapper>
          </InfoContainer>
        </Wrapper>
        {/* suggestions */}
        <Suggestion>More like this</Suggestion>
        <SuggestionsGrid>
          {suggestions.map((movie, index) => (
            <MovieItem src={movie} key={index} alt="movie poster" />
          ))}
        </SuggestionsGrid>
      </MaxContainer>
      {/* footer */}
      <Footer />
    </>
  );
}

export default MovieDetails;
