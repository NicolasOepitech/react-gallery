import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
      <div className="card-container">
        <img src={props.photo.thumbnailUrl} alt={props.photo.title} />
        <h3>
          {props.photo.title} {props.photo.id}
        </h3>
      </div>
  );
}
