import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles'; 
import './App.css';
import View01 from './view/view01';
import ParticleBackground from './view/paricles'; 
import View02 from './view/view02';
import View03 from './view/view03';
import View04 from './view/view04';
import View05 from './view/view05';
import { useEffect, useRef, useState } from 'react';
import Moblie01 from './view/moblie01';
import Moblie02 from './view/moblie02';
import Moblie03 from './view/moblie03';
import Moblie04 from './view/moblie04';
import Moblie05 from './view/moblie05';

function App() {


  return (
<div className="relative w-full min-h-screen bg-black">
  <ParticleBackground />
  <div  className="block lg:hidden scroll-smooth overflow-x-hidden">
    <Moblie01/>
    <Moblie02/>
    <Moblie03/>
    <Moblie04/>
    <Moblie05/>
  </div>
  <div className="relative z-10 hidden lg:block overflow-hidden">
    <View01 /> 
    <View02 /> 
    <View03 /> 
    <View04 /> 
    <View05 /> 
  </div>
</div>
  );
}

export default App;
