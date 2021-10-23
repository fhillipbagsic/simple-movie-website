import styled from "styled-components";

const PosterWrapper = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
  margin-right: 40px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

const Poster = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 20px;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 75%;
    margin: 20px auto;
  }
`;

const Details = styled.div`
  flex: 1;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h2`
  font-size: 26px;
  color: white;
  margin: 5px 0;
  flex: 1;
`;

const StarWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 5px;
  color: #ddb658;
  align-self: center;
`;
const RatingScore = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 600;
  align-self: center;
  margin: 0;
`;

const Length = styled.h3`
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin: 5px 0;
  display: inline-block;

  ::before {
    content: " • ";
  }
`;

const Genre = styled(Length)`
  ::before {
    content: "";
  }
  ::after {
    content: "";
  }
`;

const ReleaseDate = styled.h4`
  color: white;
  font-size: 15px;
  font-weight: 400;
  margin: 0;
`;

const Overview = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 400;
`;

const StaffWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 0 40px 10px 0;
`;

const StaffName = styled.h4`
  margin: 0;
  font-weight: 600;
  color: white;
`;
const StaffRole = styled.h5`
  margin: 0;
  color: white;
  font-weight: 500;
`;

export {
  PosterWrapper,
  Poster,
  Details,
  TitleWrapper,
  Title,
  StarWrapper,
  RatingScore,
  Genre,
  Length,
  ReleaseDate,
  Overview,
  StaffWrapper,
  StaffName,
  StaffRole,
};
