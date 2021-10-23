import styled from "styled-components";
import MaxContainer from "./MaxContainer";

const Container = styled.footer`
  width: 100%;
  color: white;
  background: #1c2631;
  margin-top: 2rem;
  padding: 1rem 0;
`;
const AppName = styled.h2`
  color: white;
  font-size: 24px;

  font-weight: 700;
`;
const Dot = styled.span`
  color: #1fe38c;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const GroupTitle = styled.p`
  font-size: 14px;
  margin: 7px 0;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  color: inherit;
`;

const MailWrapper = styled(GroupWrapper)`
  flex: 1;

  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

const MailInputWrapper = styled.div`
  display: flex;
`;
const EmailInput = styled.input`
  background: transparent;
  border: 1px solid #878787;
  border-radius: 7px 0 0 7px;
  padding: 10px;
  color: inherit;

  :focus {
    border: none;
  }
`;

const MailButton = styled.button`
  background: #446de2;
  color: inherit;
  padding: 10;
  border: none;
  border-radius: 7px;
  padding: 10px;
  cursor: pointer;
  margin-left: -5px;
`;

const Divider = styled.hr`
  width: 100%;
  border-color: #5f5f5f;
  margin: 2rem 0 1rem 0;
`;

const Label = styled(GroupTitle)`
  text-align: end;
  color: #acacac;
`;

function Footer() {
  return (
    <Container>
      <MaxContainer>
        <AppName>
          Netflex<Dot>.</Dot>
        </AppName>
        <LinksWrapper>
          <GroupWrapper>
            <GroupTitle>The Basics</GroupTitle>
            <Link href="!#">About Netflex</Link>
            <Link href="!#">Contact Us</Link>
            <Link href="!#">API</Link>
          </GroupWrapper>
          <GroupWrapper>
            <GroupTitle>Get Involved</GroupTitle>
            <Link href="!#">Contribution</Link>
            <Link href="!#">Add New Movie</Link>
            <Link href="!#">Add New TV Show</Link>
            <Link href="!#">3rd Party Apps</Link>
          </GroupWrapper>
          <GroupWrapper>
            <GroupTitle>Community</GroupTitle>
            <Link href="!#">Guidelines</Link>
            <Link href="!#">Discussions</Link>
          </GroupWrapper>
          <GroupWrapper>
            <GroupTitle>Legal</GroupTitle>
            <Link href="!#">Terms of Use</Link>
            <Link href="!#">API Terms of Use</Link>
            <Link href="!#">Privacy Policy</Link>
          </GroupWrapper>
          <MailWrapper>
            <GroupTitle>Subscribe to our newsletter</GroupTitle>
            <MailInputWrapper>
              <EmailInput type="email" placeholder="Your email here" />
              <MailButton>Subscribe</MailButton>
            </MailInputWrapper>
          </MailWrapper>
        </LinksWrapper>
        <Divider />
        <Label>© 2021 Netflex. All rights reserved.</Label>
      </MaxContainer>
    </Container>
  );
}

export default Footer;
