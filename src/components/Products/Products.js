import { useState } from 'react';
import { Set } from '../Set/Set';
import { Stock } from '../Stock/Stock';
import './Products.scss';

export const Products = () => {
  const [btn, setBtn] = useState(<Set />);

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'Set':
        setBtn(<Set />);
        break;
      case 'Stock':
        setBtn(<Stock />);
        break;
      default:
        break;
    }
  };

  console.log(btn);
  return (
    <div>
      <nav className="Products">
        <button className="Products__button" name="Set" onClick={handleChange}>
          наборы
        </button>
        <button className="Products__button" name="Stock" onClick={handleChange}>
          фирменные <br /> роллы
        </button>
        <button className="Products__button">
          запеченные <br /> роллы
        </button>
        <button className="Products__button">темпура роллы</button>
        <button className="Products__button">дополнения</button>
        <button className="Products__button">напитки</button>
      </nav>
      {btn}
    </div>
  );
};
