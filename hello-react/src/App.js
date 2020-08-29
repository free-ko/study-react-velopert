import React, { Component } from 'react';
import './App.css';
// import Say from './Say';

function Food({ name, hot }) {
  return (
    <div>
      <h1>I Like {name}</h1>
      <h2>Spicy is {hot}</h2>
    </div>
  );
}

const FoodILike = [
  { name: 'kimchi', hot: 'strong' },
  { name: 'kimbap', hot: 'soso' },
];

function App() {
  return (
    <div>
      {FoodILike.map((dish) => (
        <Food name={dish.name} hot={dish.hot} />
      ))}
    </div>
  );
}

export default App;
