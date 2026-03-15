import styled from "styled-components";

const Section = styled.section`
  margin-top: 40px;
  padding: 30px;
  background: #fff;
  border-radius: 20px;
  border: 1px solid #ddd;
`;

const NewsCard = styled.div`
  margin-top: 15px;
  padding: 20px;
  background: #f8f8f8;
  border-left: 5px solid #d1131d;
  border-radius: 10px;
`;

export default function News() {
  return (
    <Section>
      <h2>Latest News</h2>

      <NewsCard>
        <h3>Match Day Atmosphere at Beira-Rio</h3>
        <p>
          Fans continue to make Beira-Rio one of the most exciting stadiums in
          Brazilian football with their energy and support.
        </p>
      </NewsCard>

      <NewsCard>
        <h3>Legend Spotlight: Fernandão</h3>
        <p>
          Internacional supporters still celebrate Fernandão as one of the most
          important figures in the club’s history.
        </p>
      </NewsCard>

      <NewsCard>
        <h3>Future CMS Integration</h3>
        <p>
          This section can later be connected to Contentful so news posts can be
          added and updated without changing the code.
        </p>
      </NewsCard>
    </Section>
  );
}