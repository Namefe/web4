// ParticleBackground.js
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      className="fixed w-full h-screen z-0 mix-blend-lighten"
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, 
        background: { color: "#000" },
        fpsLimit: 60,
        particles: {
          color: { value: "#ffffff" },
          number: { value: 50, density: { enable: true, area: 800 } },
          size: { value: { min: 0.1, max: 2 } },
          move: { enable: true, speed: 0.5 },
          opacity: { value: 0.2 },
        },
      }}
    />
  );
};

export default ParticleBackground;
