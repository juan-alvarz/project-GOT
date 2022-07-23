import React from "react";
import "./CharacterCard.css";

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
const CharacterCard = (props) => {
  return (
    <div className="containerCharacter">
      <div>
        <img src={props.imageUrl} id="imageDetail" />
      </div>
      <div className="textDetail">
        <p>
          ID:
          {props.id}
        </p>
        <p>
          <strong>Name:</strong> <br />
          {props.fullName}
        </p>
        <p>
          <strong>Title:</strong> <br />
          {props.title}
        </p>
        <p>
          <strong>Family:</strong> <br />
          {props.family}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
