import './App.css';
import Header from './components/header/Header';
import LogosSlider from './components/logosSlider/logosSlider';
import MainBlock from './components/mainblock/MainBlock';
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
    </div>
  );
}

export default App;
