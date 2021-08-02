import axios from 'axios';
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';
import { connect } from 'react-redux';

function App(props) {
  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      props.setPizzas(data.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
      <Route path="/" exact render={() => <Home items={props.items} />} />
      <Route path="/cart" exact component={Cart} />
    </div>
  );
}

const mapStateToProps = (state) => ({ items: state.pizzas.items });
const mapDispatchToProps = {
  setPizzas,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
