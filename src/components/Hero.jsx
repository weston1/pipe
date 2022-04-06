import ThreeHero from "../components/ThreeHero";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-img-container">
        <div className="hero-img"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="hero-earth-container">
            <ThreeHero />
          </div>
          <div className="hero-copy">
            <div className="tagline">FOR COMPANIES WITH RECURRING REVENUE</div>
            <h1>Grow on your terms.</h1>
            <div className="subtitle">
              Pipe transforms recurring revenue into up-front capital for growth
              without dilution or restrictive debt.
            </div>
            <button className="btn btn-primary btn-sub">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
