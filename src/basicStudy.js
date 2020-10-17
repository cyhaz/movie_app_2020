import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id:1,
    name: "짜장면",
    price: "7000원",
    rating: 5
  },
  {
    id:2,
    name: "짬뽕",
    price: "8000원",
    rating: 4.3
  },
  {
    id:3,
    name: "볶음밥",
    price: "9000원",
    rating: 4.8
  },
  {
    id:4,
    name: "탕수육",
    price: "10000원",
    rating: 2.5
  },
  {
    id:5,
    name: "양꼬치",
    price: "20000원",
    rating: 3.0
  }
];

function Food({name, price, rating}) {
  return (
    <div>
      <h2>menu : {name}</h2>
      <h4>rating : {rating}/5.0</h4>
      <p>price : {price}</p>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

// function renderFood(dish) {
  //   console.log(dish);
  //   return <Food name={dish.name} price={dish.price} />
  // }
  
  function App() {
    return (
      <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} price={dish.price} rating={dish.rating} />
      ))}
    </div>
    );

  // return (
  //   <div>
  //     {foodILike.map(renderFood)}
  //   </div>
  // );
}

export default App;
