import styled from "styled-components";
const Suggestion = styled.h2`
  color: white;
  font-weight: 700;
  font-size: 24px;
  margin-top: 0;
`;

const SuggestionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
`;

const MovieItem = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export { Suggestion, SuggestionsGrid, MovieItem };
