import { useState, useEffect } from 'react';
import './Basket.scss';

export const Basket = ({ key, id, imgPath, title, money, count }) => {
  let newMoney = Number(money.slice(0, money.length - 1));

  const [state, setState] = useState({
    id: id,
    count: count,
    money: newMoney,
  });

  const deleteProduct = () => {
    localStorage.removeItem(state.id);
    document.getElementById(id).remove();
  };
  console.log(document.getElementById(id));

  const addCount = () => {
    setState((prev) => ({
      ...prev,
      count: state.count + 1,
      money: state.money + newMoney,
    }));
  };

  const clearCount = () => {
    if (state.count === 0) {deleteProduct()}
    setState((prev) => ({
      ...prev,
      count: state.count - 1,
      money: state.money - newMoney,
    }));
  };

  console.log(state);
  return (
    <div className="Basket" id={id}>
      <div className="Basket__block-left">
        <img src={imgPath} alt={title} className="Basket__image"></img>
        <h3 className="Basket__title">{title}</h3>
      </div>
      <div className="Basket__block-right">
        <button className="Basket__button" onClick={clearCount}></button>
        <p className="Basket__count">{state.count}</p>
        <button className="Basket__button" onClick={addCount}></button>
        <p className="Basket__money">{state.money}р</p>
        <button className="Basket__button" onClick={deleteProduct}></button>
      </div>
    </div>
  );
};
