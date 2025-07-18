import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles'; // 
import './App.css';
import './css/reset.css';
import View01 from './view/view01';
import ParticleBackground from './view/paricles'; // ✅ 파일명 맞으면 OK

function App() {
  return (
<div className="relative w-full min-h-screen bg-black">
  <ParticleBackground />
  <div className="relative z-10">
    <View01 /> {/* 여기에 나머지 콘텐츠들 */}
  </div>
</div>
  );
}

export default App;
