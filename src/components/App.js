import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(r => r.json())
    .then(data => setToys(data))
  }, [])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy) {
    setToys([...toys, newToy])
  }

  function handleAddLike(likedToy) {
    fetch(`http://localhost:3001/toys/${likedToy.id}`, {
      method: "PATCH",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({likes: likedToy.likes + 1})
    })
    .then(r => r.json())
    .then(setToys(toys.map(toy => (
      toy.id === likedToy.id ? {...toy, likes: toy.likes + 1} : toy
    ))))
    // do i increase the like count first and then change state or do i patch first and then change state
  }
   
  function handleDelete(deletedToy) {
    fetch(`http://localhost:3001/toys/${deletedToy.id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(setToys(toys.filter(toy => toy.id !== deletedToy.id)))
    
  }
       
  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onAddLike={handleAddLike} onDelete={handleDelete} />
    </>
  );
}

export default App;
