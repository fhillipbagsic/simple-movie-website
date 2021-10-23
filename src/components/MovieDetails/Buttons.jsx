import styled from "styled-components";

const WatchButton = styled.button`
  padding: 10px 20px;
  font-weight: bold;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 15px;
  margin-bottom: 15px;
  text-transform: uppercase;
  :hover {
    transform: scale(1.025);
  }
`;

const NetflixButton = styled(WatchButton)`
  color: white;
  background-color: #b81d24;
`;

const HuluButton = styled(WatchButton)`
  color: #1de783;
  background-color: #0a1318;
`;

const PrimeVideoButton = styled(WatchButton)`
  color: #00aae1;
  background-color: #19222d;
`;

const PrimeVideoText = styled.span`
  color: white;
`;

const HBOButton = styled(WatchButton)`
  color: white;
  background: linear-gradient(to right, #4b00c1, #ae45fa);
`;

const YoutubeButton = styled(WatchButton)`
  color: black;
  background: white;
`;
const YoutubeText = styled.span`
  color: #e62117;
`;
const WatchlistButton = styled(WatchButton)`
  color: white;
  background-color: #6e7b83;
  width: 100%;
`;

export {
  NetflixButton,
  HuluButton,
  PrimeVideoButton,
  HBOButton,
  PrimeVideoText,
  YoutubeButton,
  YoutubeText,
  WatchlistButton,
};
