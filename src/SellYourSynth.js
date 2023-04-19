import React, { useState } from "react";

function SellYourSynth({ addSynth }) {
  const [name, setName] = useState("");
  const [condition, setCondition] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");

  const newSynth = {
    name: name,
    condition: condition,
    image: image,
    price: price,
    description: description,
    contact: contact,
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/synths", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSynth),
    })
      .then((r) => r.json())
      .then((synthData) => {
        addSynth(synthData);
        setName("");
        setCondition("");
        setImage("");
        setPrice("");
        setDescription("");
        setContact("");
      });

    // addSynth(newSynth);
  };

  //why condition and name no workey
  return (
    <div className="new-synth-form">
      <h2>Sell Yr Synth</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={newSynth.name}
          type="text"
          name="name"
          placeholder="Synth name"
        />
        <input
          onChange={(e) => setCondition(e.target.value)}
          value={newSynth.condition}
          type="text"
          name="condition"
          placeholder="Condition"
        />
        <input
          onChange={(e) => setImage(e.target.value)}
          value={newSynth.image}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={newSynth.price}
          type="number"
          name="price"
          placeholder="Price"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={newSynth.description}
          type="text"
          name="Description"
          placeholder="Description"
        />
        <input
          onChange={(e) => setContact(e.target.value)}
          value={newSynth.contact}
          type="text"
          name="Contact"
          placeholder="Contact"
        />
        <button type="submit">Add Synth</button>
      </form>
      <p className="ground">⏚</p>
    </div>
  );
}

export default SellYourSynth;
