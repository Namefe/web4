import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles'; 
import './App.css';
import './css/reset.css';
import View01 from './view/view01';
import ParticleBackground from './view/paricles'; 
import View02 from './view/view02';
import View03 from './view/view03';
import View04 from './view/view04';
import View05 from './view/view05';

function App() {
  return (
<div className="relative w-full min-h-screen bg-black">
  <ParticleBackground />
  <div className="relative z-10">
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
