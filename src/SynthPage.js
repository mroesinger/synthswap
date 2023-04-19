import React, { useState, useEffect } from "react";
import SellYourSynth from "./SellYourSynth";
import SynthList from "./SynthList";

function SynthPage({ synths, addSynth }) {
  return (
    <main>
      <SynthList synths={synths} addSynth={addSynth} />
    </main>
  );
}

export default SynthPage;
