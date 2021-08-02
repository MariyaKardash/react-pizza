import React from 'react';

import { Categories, PizzaBlock, SortPopup } from '../components';

function Home() {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(elem) => console.log(elem)}
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <PizzaBlock />
      </div>
    </div>
  );
}

export default Home;
