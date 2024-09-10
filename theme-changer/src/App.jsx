import Wrapper from './components/Theme/Wrapper';
import Header from './components/Theme/Header';
import ThemeToggleButton from './components/Theme/ThemeToggleButton';
import Gallery from './components/Theme/Gallery';
import Footer from './components/Theme/Footer';
import styles from './components/Theme/Theme.module.scss'; 

const App = () => {
  const images = ['/src/assets/poop.png', '/src/assets/poop.png', '/src/assets/poop.png'];

  return (
    <Wrapper>
      <Header title="Tema skift app" />
      <ThemeToggleButton />
      <Gallery images={images} />
      <Footer />
    </Wrapper>
  );
};

export default App;
