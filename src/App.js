import Particles from 'react-tsparticles';
import './App.css';
import './css/reset.css';
import View01 from './view/view01';

function App() {
  return (
    <div className="relative w-full h-screen bg-black">
      <Particles /> 
      <View01 />
    </div>
  );
}

export default App;
