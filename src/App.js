import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
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
