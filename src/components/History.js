import styled from "styled-components";

const Section = styled.section`
  margin-top: 40px;
  padding: 30px;
  background: #f4f4f4;
  border-radius: 20px;
`;

export default function History() {
  return (
    <Section>
      <h2>Club History</h2>
      <p>
        Sport Club Internacional was founded in 1909 in Porto Alegre, Brazil.
        The club became known for its strong fanbase, major domestic success,
        and international trophies. Internacional is one of the most respected
        clubs in Brazilian football history.
      </p>
    </Section>
  );
}