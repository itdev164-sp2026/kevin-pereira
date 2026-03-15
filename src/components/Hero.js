import styled from "styled-components";

const HeroSection = styled.section`
  background: linear-gradient(135deg, #b30018, #d71920);
  color: white;
  padding: 70px 40px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 48px;
`;

const Text = styled.p`
  margin-top: 15px;
  font-size: 20px;
`;

export default function Hero() {
  return (
    <HeroSection>
      <Heading>SC Internacional</Heading>
      <Text>The People's Club of Porto Alegre, Brazil</Text>
    </HeroSection>
  );
}