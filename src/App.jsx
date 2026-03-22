import HomePage from "./components/HomePage";
import { ReactLenis } from "lenis/react";

const App = () => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      <HomePage />
    </ReactLenis>
  );
};

export default App;
