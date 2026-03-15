import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import History from "../components/History";
import Players from "../components/Players";
import Matches from "../components/Matches";
import News from "../components/News";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
        <Hero />

        <section style={{ marginTop: "40px" }}>
          <h2>About the Club</h2>
          <p>
            Sport Club Internacional is a Brazilian football club based in Porto
            Alegre, Rio Grande do Sul. Founded in 1909, the club is known for
            its passionate supporters, historic success, and major influence in
            Brazilian football.
          </p>
        </section>

        <section style={{ marginTop: "40px" }}>
          <h2>Website Features</h2>
          <ul>
            <li>Club History</li>
            <li>Featured Players</li>
            <li>Match Center</li>
            <li>Latest News</li>
          </ul>
        </section>

        <History />
        <Players />
        <Matches />
        <News />
      </main>

      <Footer />
    </>
  );
}