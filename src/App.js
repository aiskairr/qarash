import React, { useRef } from 'react';
import './App.css';
import 'animate.css';
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
  // Create refs for sections
  const socBlockRef = useRef(null);
  const programmsRef = useRef(null);
  const footerRef = useRef(null);
  const formRef = useRef(null);

  return (
    <div className="App">
      <Header
        socBlockRef={socBlockRef}
        programmsRef={programmsRef}
        footerRef={footerRef}
      />
      <MainBlock formRef={formRef} />
      <LogosSlider />
      <div ref={socBlockRef}>
        <SocBlock />
      </div>
      <SliderBlock />
      <VideoPlayer />
      <div ref={programmsRef}>
        <Programms />
      </div>
      <MoviesBlock />
      <div ref={formRef}>
        <FormBlock />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;