import { useState } from 'react';
import { Set } from '../Set/Set';
import { setData } from '../Set/Set.const';
import { tempuraData } from '../Set/Tempura.const';

import './Products.scss';

export const Products = () => {
  const set = 'наборы',
    firm = 'фирменные роллы',
    baked = 'запеченные роллы',
    tempura = 'темпура роллы',
    add = 'дополнения',
    drink = 'напитки';

  const [btn, setBtn] = useState(<Set Data={setData} title={set}/>);

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'Set':
        setBtn(<Set Data={setData} title={set}/>);
        break;
      case 'Tempura':
        setBtn(<Set Data={tempuraData} title={tempura}/>);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <a name="products"></a>
      <nav className="Products">
        <button className="Products__button" name="Set" onClick={handleChange}>
          {set}
        </button>
        <button className="Products__button">{firm}</button>
        <button className="Products__button">{baked}</button>
        <button className="Products__button" name="Tempura" onClick={handleChange}>
          {tempura}
        </button>
        <button className="Products__button">{add}</button>
        <button className="Products__button">{drink}</button>
      </nav>
      {btn}
    </div>
  );
};
