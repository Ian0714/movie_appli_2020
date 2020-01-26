import React from 'react';

function Food({ name }) {
  return <h1>I love {name}</h1>; 
}

const FoodILike = [
  {id=1, name = "Kimchi"},
  {id=2, name = "Samgyeopsal"},
  {id=3, name = "Bibimbap"}
];

function App() {
  return (
    <div>
      {FoodILike.map(dish => (<Food key={dish.id} name={dish.name} />))}
    </div>
  );
}

export default App;
