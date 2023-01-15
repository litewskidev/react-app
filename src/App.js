import Container from "./components/Container/Container";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return(
    <main>
      <NavBar />
      <Container>
        <Home />
      </Container>
    </main>
  );
};

export default App;
