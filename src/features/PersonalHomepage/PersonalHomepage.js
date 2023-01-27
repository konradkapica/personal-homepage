import { Container } from "./Container/styled";
import Header from "./Header";
import Tile from "./Tile";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import { skills } from "./Tile/skills"
import { skillsToLearn } from "./Tile/skillsToLearn"

function PersonalHomepage() {
  return (
    <Container>
      <Header />
      <Tile
        title="My skillset includes 🛠️"
        skills={skills}
      />
      <Tile
        title="What I want to learn next 🚀"
        skills={skillsToLearn}
      />
      <Portfolio />
      <Footer />
    </Container>
  );
}

export default PersonalHomepage;
