import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, rating }) {
  return (
  <div>
    <h1>I love {name}</h1>
    <h4>{rating}/5.0</h4>
    </div>
    ); 
}

const FoodILike = [
  {id: 1, name: "Kimchi", rating: 5},
  {id: 2, name: "Samgyeopsal", rating: 4.9},
  {id: 3, name: "Bibimbap", rating: 4.2}
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {FoodILike.map(dish => (<Food key={dish.id} name={dish.name} rating={dish.rating}/>))}
    </div>
  );
}

export default App;
