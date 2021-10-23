import React, { useState } from "react";
import { Route, Switch, useParams } from "react-router";
import styled from "styled-components";
import Movies from "../components/Discover/Movies";
import TVShows from "../components/Discover/TVShows";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const Container = styled.main`
  display: flex;
`;
const Wrapper = styled.div`
  width: 100%;
`;

const Tabs = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 2rem;
`;

const Tab = styled.h2`
  color: #${(props) => (props.selected === "true" ? "CAD5DD" : "6E7B83")};
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  margin-right: 15px;
  padding-bottom: 5px;
  text-decoration: none;

  border-bottom: ${(props) =>
    props.selected === "true" ? "2px solid #1FE38C" : "none"};
`;

const Filter = styled.select`
  background-color: #1fe38c;
  border: none;
  border-radius: 20px;
  margin-left: auto;
  padding: 10px 10px;
  @media (max-width: 450px) {
    width: 100%;
    margin-top: 25px;
  }
`;
const OptionGroup = styled.optgroup``;

const Option = styled.option``;

function Discover() {
  const [filter, setFilter] = useState("leastpopular");
  const { media } = useParams();

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    console.log(filter);
  };

  return (
    <>
      <NavBar />
      <Container>
        {/* <SideBar /> */}
        <Wrapper>
          <Tabs>
            <Tab
              selected={`${media === "movies"}`}
              as="a"
              href="/discover/movies"
            >
              Movies
            </Tab>
            <Tab
              selected={`${media === "tvshows"}`}
              as="a"
              href="/discover/tvshows"
            >
              TV Shows
            </Tab>
            <Filter
              defaultValue={filter}
              onChange={(event) => handleFilterChange(event)}
            >
              <OptionGroup label="Popularity">
                <Option value="mostpopular">Most Popular</Option>
                <Option value="leastpopular">Least Popular</Option>
              </OptionGroup>
              <OptionGroup label="Release Date">
                <Option value="newest">Newest</Option>
                <Option value="oldest">Oldest</Option>
              </OptionGroup>
              <OptionGroup label="Vote">
                <Option value="highestrating">Highest Rating</Option>
                <Option value="lowestrating">Lowest Rating</Option>
              </OptionGroup>
            </Filter>
          </Tabs>
          <Switch>
            <Route path="/discover/movies">
              <Movies filter={filter} />
            </Route>

            <Route path="/discover/tvshows" component={TVShows} />
            <Route path="/discover/*">
              <h1>Error</h1>
            </Route>
          </Switch>
          <Footer />
        </Wrapper>
      </Container>
    </>
  );
}

export default Discover;
