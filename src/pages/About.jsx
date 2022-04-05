import { FaCode } from "react-icons/fa";

function About() {
  return (
    <div className="about">
      <h1 className="text-6xl mb-4">Pipe Project</h1>
      <p className="mb-4 text-2xl font-light">
        Merchant trading view for reviewing contracts based on recurring
        revenue.
        <br />
      </p>
      <div>
        <h2>
          <strong>Stack &amp; Tools</strong>
        </h2>
        <ul>
          <li>React.JS.</li>
          <li>react-icons</li>
        </ul>
      </div>
      <div>
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
  );
}

export default About;
