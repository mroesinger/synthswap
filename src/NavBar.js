import React, { useState } from "react";
import { Link } from "react-router-dom";
function NavBar() {
  const [titleName, setTitleName] = useState(true);

  function handleTitle() {
    setTitleName(!titleName);
  }
  return (
    <div>
      <h1 className="red" onClick={handleTitle}>
        {titleName ? "synth⏚swap" : "BAJA🏝FACTS"}
      </h1>
      <nav>
        <Link className="link" to="/">
          ⏚
        </Link>
        <Link className="link" to="/sellyoursynth">
          Sell Yr Synth
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
