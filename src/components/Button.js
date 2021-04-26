import React from "react";

export default function Button(props) {
  return (
    <div>
      <button onClick={props.onClick} className="hero-button">
        {props.title}
      </button>
    </div>
  );
}
