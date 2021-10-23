import styled from "styled-components";
import { SearchIcon } from "@heroicons/react/outline";
const Container = styled.nav`
  width: 100%;
  color: white;
  background-color: #1b2634;
  padding: 1.1rem 2rem;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const AppName = styled.h1`
  font-size: 36px;
  letter-spacing: 0.7px;
  margin: 0;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Dot = styled.span`
  color: #1fe38c;
`;

const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Tab = styled.h3`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  margin-right: 25px;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    color: #1fe38c;
  }
`;

const Language = styled(Tab)`
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px 7px;
  font-size: 14px;
  :hover {
    border-color: #1fe38c;
  }
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  color: #1fe38c;
  cursor: pointer;
  transition: all 0.2s ease;
  :hover {
    transform: scale(1.1);
  }
`;

function NavBar() {
  return (
    <Container>
      <AppName>
        Netflex<Dot>.</Dot>
      </AppName>
      <TabWrapper>
        <Tab>Join Now</Tab>
        <Tab>Login</Tab>
        <Language>EN</Language>
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
      </TabWrapper>
    </Container>
  );
}

export default NavBar;
