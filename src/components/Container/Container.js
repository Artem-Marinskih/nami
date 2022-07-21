import './Container.scss';
import { array } from '../../pages/MainPage/MainPage';
import { useState, useEffect } from 'react';

export const Container = ({ id, imgPath, title, text, weight, money }) => {
  // let products;
  // const [state, setState] = useState(products);

  const getOut = () => {
    let productObject = {
      id: id,
      imgPath: imgPath,
      title: title,
      money: money,
      count: 1,
    };

    // console.log('click');

    // setState((prev) => ({
    //   ...prev,
    //   products: productObject,
    // }));


    localStorage.setItem(id, JSON.stringify(productObject));

    // localStorage.id = JSON.stringify(productObject)
  };

  // useEffect(() => {
  //   if (state !== undefined) {
  //     array.push(state);
  //   }
  // });

  

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
