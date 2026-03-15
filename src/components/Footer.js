import styled from "styled-components";

const FooterSection = styled.footer`
  margin-top: 50px;
  padding: 20px;
  text-align: center;
  background: #b30018;
  color: white;
  border-radius: 20px 20px 0 0;
`;

export default function Footer() {
  return (
    <FooterSection>
      <p>SC Internacional Fan Website</p>
      <p>Created with Next.js, React, Styled Components, and Contentful</p>
    </FooterSection>
  );
}