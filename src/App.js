import { Container } from "./common/Container/styled";
import Header from "./features/Header";
import Tile from "./common/Tile";
import Footer from "./features/Footer";
import Portfolio from "./features/Portfolio";
import { skills } from "./common/Tile/skills"
import { skillsToLearn } from "./common/Tile/skillsToLearn"

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
