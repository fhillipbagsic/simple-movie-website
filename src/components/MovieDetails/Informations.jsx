import styled from "styled-components";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 30px;
  border-radius: 5px;

  color: white;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const InfoTitle = styled.h3`
  margin: 0;
  font-weight: 600;
`;

const InfoDetail = styled.h4`
  margin: 5px 0 15px 0;
  font-weight: 500;
`;

const KeywordWrapper = styled.div`
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  @media (max-width: 769px) {
    flex-wrap: wrap;
  }
`;
const Keyword = styled.p`
  padding: 7px;
  margin: 5px;
  background: #3b4856;
  box-shadow: 0 2px 2px #15202c;
  align-self: flex-start;
  border-radius: 5px;
`;
export { InfoContainer, InfoTitle, InfoDetail, KeywordWrapper, Keyword };
