import { Container } from "./features/PersonalHomepage/Container/styled";
import Header from "./features/PersonalHomepage/Header";
import Tile from "./features/PersonalHomepage/Tile";
import Footer from "./features/PersonalHomepage/Footer";
import Portfolio from "./features/PersonalHomepage/Portfolio";
import { skills } from "./features/PersonalHomepage/Tile/skills"
import { skillsToLearn } from "./features/PersonalHomepage/Tile/skillsToLearn"

function App() {
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

export default App;
