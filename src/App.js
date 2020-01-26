import React from 'react';

function Food({ name }) {
  return <h1>I love {name}</h1>; 
}

constdILike = [
  {name = "Kimchi"},
  {name = "Samgyeopsal"},
  {name = "Bibimbap"}
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {FoodILike.map(dish => <Food name={dish.name} />)}
    </div>
  );
}

export default App;
