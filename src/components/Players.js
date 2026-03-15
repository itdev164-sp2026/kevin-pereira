import styled from "styled-components";

const Section = styled.section`
  margin-top: 40px;
  padding: 30px;
  background: #fff5f5;
  border-radius: 20px;
`;

const PlayerCard = styled.div`
  margin-top: 15px;
  padding: 15px;
  background: white;
  border-left: 5px solid #d1131d;
  border-radius: 10px;
`;

export default function Players() {
  return (
    <Section>
      <h2>Featured Players</h2>

      <PlayerCard>
        <h3>Andrés D'Alessandro</h3>
        <p>
          One of the most iconic players in club history, known for his
          leadership, skill, and creativity in midfield.
        </p>
      </PlayerCard>

      <PlayerCard>
        <h3>Fernandão</h3>
        <p>
          A club legend and key figure in Internacional’s greatest international
          achievements.
        </p>
      </PlayerCard>

      <PlayerCard>
        <h3>Current Squad Spotlight</h3>
        <p>
          This section can later be connected to Contentful so player profiles
          can be updated without changing code.
        </p>
      </PlayerCard>
    </Section>
  );
}