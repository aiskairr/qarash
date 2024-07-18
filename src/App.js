import './App.css';
import Footer from './components/footer/Footer';
import FormBlock from './components/formBlock/FormBlock';
import Header from './components/header/Header';
import LogosSlider from './components/logosSlider/logosSlider';
import MainBlock from './components/mainblock/MainBlock';
import MoviesBlock from './components/movies/MoviesBlock';
import Programms from './components/Programms/Programms';
import SliderBlock from './components/SliderBlock/SliderBlock';
import SocBlock from './components/SocBlock/SocBlock';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBlock />
      <LogosSlider />
      <SocBlock />
      <SliderBlock />
      <VideoPlayer />
      <Programms />
      <MoviesBlock />
      <FormBlock />
      <Footer />
    </div>
  );
}

export default App;
