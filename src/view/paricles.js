// ParticleBackground.js
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      className="fixed top-0 left-0 w-full h-full z-[-1]"
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, 
        background: { color: "#000" },
        fpsLimit: 60,
        particles: {
          color: { value: "#ffffff" },
          number: { value: 150, density: { enable: true, area: 800 } },
          size: { value: { min: 1, max: 2 } },
          move: { enable: true, speed: 0.3 },
          opacity: { value: 0.5 },
        },
      }}
    />
  );
};

export default ParticleBackground;
