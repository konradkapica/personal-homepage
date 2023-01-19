import { Container } from "./common/Container/styled";
import Header from "./common/Header";
import Tile from "./common/Tile";

function App() {
  return (
    <Container>
      <Header />
      <Tile 
      title="My skillset includes 🛠️"
      />

    </Container>
  );
}

export default App;
