import ThreeHero from "../components/ThreeHero";
import Blob from "../components/Blob";
import { FaCode } from "react-icons/fa";

function AboutContent() {
  return (
    <div className="hero">
      <Blob />
      <div className="about-hero-img-container">
        <div className="about-hero-img"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="hero-copy">
            <div className="tagline">001</div>
            <h1>Front End Project</h1>
            <div className="subtitle">
              Merchant trading view for reviewing contracts based on recurring
              revenue.
            </div>
            <h2>
              <strong>Tools &amp; Technology</strong>
            </h2>
            <ul>
              <code>React.JS</code>
              <br />
              <code>react-icons</code>
              <br />
              <code>three.js</code>
              <br />
              <code>react-three/fiber</code>
              <br />
              <code>hard work!</code>
            </ul>
            <p className="text-lg text-gray-400">
              Version <span className="text-white">1.0.0</span>
            </p>
            <p className="text-lg text-gray-400">
              <FaCode className="px-3 pt-2" />
              <span className="text-white" href="#">
                Weston Brown
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
