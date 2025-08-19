import { Container } from "./components/container";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    <div className="layout">
      <div className="layout-lines-container">
        <div className="left-line" />
        <div className="right-line" />
      </div>
      <Container>
        <Navbar />
        <Hero />
      </Container>
      <div className="hero-image-container">
        <div className="horizontal-line" />
        <img src="/hero-ui-v5.webp" className="hero-image" />
      </div>
    </div>
  );
}
