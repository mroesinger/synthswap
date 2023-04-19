import React, { useState } from "react";

function SynthCard({
  altDescription,
  kidUrl,
  name,
  image,
  price,
  condition,
  description,
  contact,
}) {
  const [isKid, setIsKid] = useState(true);
  function hover() {
    setIsKid(!isKid);
  }
  return (
    <ul className="card" onClick={hover}>
      <img src={isKid ? image : kidUrl} alt={name} />
      <h4>{name}</h4>
      <p>CONDITION: {condition}</p>
      <p>${price}</p>
      <p>DESCRIPTION: {isKid ? description : altDescription}</p>
      <p>CONTACT: {contact}</p>
    </ul>
  );
}

export default SynthCard;
