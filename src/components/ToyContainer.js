import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onAddLike, onDelete }) {
  return (
    <div id="toy-collection">{toys.map(toy => (
      <ToyCard key={toy.id} toy={toy} onAddLike={onAddLike} onDelete={onDelete} />
    )
    )}
    </div>
  );
}

export default ToyContainer;
