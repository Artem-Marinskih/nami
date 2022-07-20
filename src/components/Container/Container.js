import './Container.scss';
import { array } from '../../pages/MainPage/MainPage';
import { useState, useEffect } from 'react';

export const Container = ({ id, imgPath, title, text, weight, money }) => {
  // const arr = [];
  let x;
  const [state, setState] = useState(x);

  const getOut = () => {
    let productObject = {
      id: id,
      imgPath: imgPath,
      title: title,
      text: text,
      weight: weight,
      money: money,
      count: 1,
    };

    console.log('click');

    setState((prev) => ({
      ...prev,
      x: productObject,
    }));
  };

  
    useEffect(() => {
      if (state !== undefined) {
        if (array.find(el => el.id === state.id)) {
           x.count + 1
        } else {
          // let y = array.find(el => el.id === state.id);
          // console.log(y)
          array.push(state);
        }
      
    }
    });
  
  
  // console.log(arr);

  return (
    <div className="Container">
      <div className="Container__image">
        <img src={imgPath} alt={title} />
      </div>
      <h4 className="Container__title">{title}</h4>
      <p className="Container__text">{text}</p>
      <p className="Container__weight">{weight}</p>
      <div className="Container__buy">
        <p className="Container__money">{money}</p>
        <button className="Container__button" onClick={getOut}>
          В корзину
        </button>
      </div>
    </div>
  );
};
