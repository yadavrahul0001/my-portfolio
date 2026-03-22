import { Environment, OrbitControls, View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import Hero3D from "./Hero3D";
import Images from "./Images";
import Projects from "./Projects";
import Languages from "./Languages";
import Model from "./Model";

const HomePage = () => {
  const container = useRef();
  const heroSection = useRef();
  const image1 = useRef();
  const image2 = useRef();
  const image3 = useRef();
  const image4 = useRef();
  const image5 = useRef();
  const projects = useRef();
  const languages = useRef();
  const modelSection = useRef();

  return (
    <main ref={container}>
      <Canvas
        eventSource={container}
        className="canvas"
        camera={{ position: [0, 0, 10], fov: 75 }}
        pointer-events="none"
      >
        <View track={heroSection}>
          <Hero3D />
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 0, 10]} />
        </View>
        <View track={image1}>
          <Images />
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 0, 1]} />
        </View>

        <View track={image2}>
          <Images />
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 0, 1]} />
        </View>

        <View track={image3}>
          <Images />
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 0, 1]} />
        </View>
        <View track={image4}>
          <Images />
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 0, 1]} />
        </View>
        <View track={image5}>
          <Images />
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 0, 1]} />
        </View>

        <View track={projects}>
          <Projects />
        </View>

        <View track={languages}>
          <Languages />
          <ambientLight intensity={6.5} />
          <pointLight position={[0, 0, 1]} />
        </View>

        <View track={modelSection}>
          <Model />
          <ambientLight intensity={4.5} />
          <pointLight position={[0, 0, 3]} />
        </View>
      </Canvas>

      <section className="heroSection" ref={heroSection}>
        <div className="hero-container"></div>
        <div className="hero-content-container">
          <div className="hero-info-card">LOVES</div>
          <div className="hero-info-card">CREATING</div>
          <div className="hero-info-card">3D </div>
          <div className="hero-info-card">WEB EXPERIENCES</div>
        </div>
      </section>

      <section className="imageSection">
        <div className="grid">
          <div className="grid-item1" ref={image1}>
            1
          </div>
          <div className="grid-item2" ref={image2}>
            2
          </div>
          <div className="grid-item3" ref={image3}>
            3
          </div>
          <div className="grid-item4" ref={image4}>
            4
          </div>
          <div className="grid-item5" ref={image5}>
            5
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="projects-title">Hover The Black Screen</div>
        <div className="projects-container" ref={projects}></div>
        <div className="projects-description-container">
          <div className="project-description-card">
            <h3>Project One</h3>
            <p>
              A clone of thirty-six studio website which contains a modern design and interactive elements.
            </p>
          </div>
          <div className="project-description-card">
            <h3>Project Two</h3>
            <p>
              A Virtual Reality experience built with Three.js and React Three Fiber.
            </p>
          </div>
          <div className="project-description-card">
            <h3>Project Three</h3>
            <p>
              A 3D hotel Mangement game in which i build the 3D models.
            </p>
          </div>
          <div className="project-description-card">
            <h3>Project Four</h3>
            <p>
              Working on a AI film .
            </p>
          </div>
        </div>
      </section>

      <section className="languages" ref={languages}></section>

      <section className="model">
        <div className="model-container" ref={modelSection}></div>
      </section>
    </main>
  );
};

export default HomePage;
