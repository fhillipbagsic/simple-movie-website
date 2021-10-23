import styled from "styled-components";
import {
  CollectionIcon,
  GlobeIcon,
  TrendingUpIcon,
} from "@heroicons/react/outline";
import { useLocation, useParams } from "react-router";
import { useEffect } from "react";

const Container = styled.div`
  background-color: #3b4856;
  padding: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const IconWrapper = styled.div`
  color: #${(props) => (props.selected === "true" ? "1FE38C" : "6E7B83")};
  margin-bottom: 35px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto;
`;

const Label = styled.h5`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  margin: 0;
`;

function SideBar() {
  let location = useLocation();

  useEffect(() => {
    console.log(location);
  }, []);
  //selected={`${pathname === "/discover"}`}
  return (
    <Container>
      <IconWrapper>
        <Icon>
          <TrendingUpIcon />
        </Icon>
        <Label>Trending</Label>
      </IconWrapper>
      <IconWrapper>
        <Icon>
          <GlobeIcon />
        </Icon>
        <Label>Discover</Label>
      </IconWrapper>
      <IconWrapper>
        <Icon>
          <CollectionIcon />
        </Icon>
        <Label>Watchlist</Label>
      </IconWrapper>
    </Container>
  );
}

function Contents() {}

export default SideBar;
