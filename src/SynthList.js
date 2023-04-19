import React from "react";
import SynthCard from "./SynthCard";

function SynthList({ synths }) {
  const synthCards = synths.map((synth) => {
    return (
      <SynthCard
        key={synth.id}
        kidUrl={synth.kidUrl}
        altDescription={synth.altDescription}
        name={synth.name}
        price={synth.price}
        image={synth.image}
        condition={synth.condtion}
        description={synth.description}
        contact={synth.contact}
      />
    );
  });

  return <ul>{synthCards}</ul>;
}

export default SynthList;
