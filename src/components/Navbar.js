import styled from "styled-components";

const Nav = styled.nav`
  background: #b30018;
  color: white;
  padding: 20px 40px;
  border-radius: 0 0 20px 20px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 28px;
`;

const Subtitle = styled.p`
  margin: 5px 0 0 0;
  font-size: 14px;
`;

export default function Navbar() {
  return (
    <Nav>
      <Title>SC Internacional</Title>
      <Subtitle>Porto Alegre, Brazil</Subtitle>
    </Nav>
  );
}