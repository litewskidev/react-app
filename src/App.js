import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Container from "./components/Container/Container";
import Home from "./components/Home/Home";
import Favorite from "./components/Favorite/Favorite";
import About from './components/About/About';
import E404 from './components/404/E404';

const App = () => {
  return(
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path='*' element={<E404 />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
