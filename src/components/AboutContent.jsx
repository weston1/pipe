import { FaCode } from "react-icons/fa";
import Blob from "../components/Blob";

function AboutContent() {
  return (
    <div className="about-hero">
      <div className="about-hero-img-container">
        <div className="about-hero-img"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="about-hero-copy">
            <div className="tagline">001</div>
            <h1>Front End Project</h1>
            <div className="subtitle">
              Merchant trading view for reviewing contracts based on recurring
              revenue.
            </div>
            <h2>
              <strong>Tools &amp; Technology</strong>
            </h2>
            <ul className="text-success">
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
          <div>
            <Blob />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
