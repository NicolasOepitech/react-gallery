import React from "react";
import './Card.css';

export default function Card(props) {
  return (
    <div className="card-container">
      <h3>{props.photos.title} {props.photos.id}</h3>
      <div className="card-image">
        <img src={props.photos.thumbnailUrl} alt="random" />
      </div>
    </div>
  );
}
