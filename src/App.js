import AboutSection from "./component/main/about/AboutSection";
import HeroSection from "./component/main/hero/HeroSection";

function App() {
  return (
    <main className="relative select-none overflow-x-hidden">
      <HeroSection />

      <AboutSection />
    </main>
  );
}

export default App;
