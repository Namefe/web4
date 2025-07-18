// ParticleBackground.js
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
    className="absolute top-0 left-0 w-full h-full z-[999999999999999999999]"
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#000000" },
        fpsLimit: 60,
        particles: {
          color: { value: "#ffffff" },
          number: { value: 500, density: { enable: true, area: 800 } },
          size: { value: { min: 1, max: 2 } },
          move: { enable: true, speed: 0.3 },
          opacity: { value: 0.6 },
        },
      }}
    />
  );
};

export default ParticleBackground;
