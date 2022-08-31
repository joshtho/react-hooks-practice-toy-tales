import React from "react";

function ToyCard({toy, onAddLike, onDelete}) {
  
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={() => onAddLike(toy)} >Like {"<3"}</button>
      <button className="del-btn" onClick={() => onDelete(toy)} >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
