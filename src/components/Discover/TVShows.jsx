import { useState } from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1.5rem;
  margin-top: 35px;
`;

function TVShows() {
  const [discover, setDiscover] = useState(null);

  return <Grid></Grid>;
}

export default TVShows;
