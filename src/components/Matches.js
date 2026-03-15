import styled from "styled-components";

const Section = styled.section`
  margin-top: 40px;
  padding: 30px;
  background: #f9f9f9;
  border-radius: 20px;
`;

const MatchItem = styled.div`
  margin-top: 15px;
  padding: 15px;
  background: white;
  border-radius: 10px;
  border: 1px solid #ddd;
`;

export default function Matches() {
  return (
    <Section>
      <h2>Match Center</h2>

      <MatchItem>
        <h3>Internacional vs Grêmio</h3>
        <p>Date: April 6</p>
      </MatchItem>

      <MatchItem>
        <h3>Internacional vs Flamengo</h3>
        <p>Date: April 13</p>
      </MatchItem>

      <MatchItem>
        <h3>Internacional vs Palmeiras</h3>
        <p>Date: April 20</p>
      </MatchItem>
    </Section>
  );
}