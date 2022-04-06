import { useState } from "react";
import ContractData from "../components/data/ContractData";
import Hero from "../components/Hero";
import SliderFilter from "../components/SliderFilter";

function Home() {
  const [contracts] = useState(ContractData);

  return (
    <>
      <Hero />
      <SliderFilter contracts={contracts} />
    </>
  );
}

export default Home;
