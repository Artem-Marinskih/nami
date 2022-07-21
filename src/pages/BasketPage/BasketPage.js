import { Basket } from '../../components/Basket/Basket';
import { useState, useEffect } from 'react';

import './BasketPage.scss';


export const BasketPage = () => {

const arrayProducts = []
// let parent = document.getElementById("main");

const storageHandler = () => {
  for(let [key] of Object.entries(localStorage)) {
    let product = JSON.parse( localStorage.getItem(key))
    arrayProducts.push(product)
  }
}

storageHandler()
  
useEffect(() => {
  window.addEventListener("storage", storageHandler, false);
}, []);


  return (
    <div className="BasketPage" id='main'>
      <h2 className="BasketPage__title"></h2>
      {arrayProducts.map((card) => (
        
          <Basket
            key={card.id}
            id={card.id}
            imgPath={card.imgPath}
            title={card.title}
            money={card.money}
            count={card.count}
          />
        ))}
       
    </div>
  );
};
