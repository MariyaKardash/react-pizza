import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((res) => res.json())
      .then((data) => setPizzas(data.pizzas));
  }, []);

  console.log(pizzas);

  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
      <Route path="/" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
    </div>
  );
}

export default App;
