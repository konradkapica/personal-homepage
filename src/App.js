import { Container } from "./common/Container/styled";
import Header from "./common/Header";
import Tile from "./common/Tile";
import Footer from "./common/Footer";
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
      <Footer />
    </Container>
  );
}

export default App;
