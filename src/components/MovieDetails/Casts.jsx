import styled from "styled-components";

const CastLabel = styled.h2`
  font-size: 24px;
  color: white;
`;

const CastContainer = styled.div`
  display: inline-flex;
  overflow-x: auto;
  border-radius: 5px;
  gap: 1rem;
  color: white;
  padding-bottom: 20px;
  flex: 3;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CastItem = styled.div`
  min-width: 150px;
  border-radius: 5px;
  background: #3b4856;
  box-shadow: 0 2px 2px #15202c;

  cursor: pointer;
  @media (max-width: 768px) {
    min-width: 110px;
  }
`;

const CastImage = styled.img`
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
`;

const CastName = styled.h4`
  margin: 5px 10px 0 10px;
`;

const CastRole = styled.h5`
  margin: 5px 10px 10px 10px;
  font-weight: 500;
`;

export { CastLabel, CastContainer, CastItem, CastImage, CastName, CastRole };
