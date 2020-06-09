import React from "react";
import "./style.css";

function KeanuCard(props) {
  return (
    <div onClick={() => props.clicked(props.id)} className="clickHandler">
      <img alt={props.name} src={props.image} />
    </div>
  );
}
export default KeanuCard;
