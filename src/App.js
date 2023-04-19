import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SynthPage from "./SynthPage";
import NavBar from "./NavBar";
import About from "./About";
import SellYourSynth from "./SellYourSynth";

function App() {
  const [synths, setSynths] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/synths")
      .then((r) => r.json())
      .then((data) => {
        setSynths(data);
      });
  }, []);

  const addSynth = (synth) => {
    setSynths((synths) => [...synths, synth]);
  };
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <SynthPage synths={synths} />
        </Route>
        <Route path="/about">
          <About />;
        </Route>
        <Route path="/sellyoursynth">
          <SellYourSynth
            synths={synths}
            setSynths={setSynths}
            addSynth={addSynth}
          />
          ;
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
