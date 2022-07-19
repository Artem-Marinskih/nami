import bigRol from '../../assets/images/bigRol.png';
import fish from '../../assets/images/fish.png';
import rice from '../../assets/images/rice.png';
import hat from '../../assets/images/hat.png';
import './Stock.scss';

export const Stock = () => {
  return (
    <div className="Stock">
      <div className="Stock__container">
        <button className="Stock__button">
          <img src={bigRol} alt='text'></img>
        </button>
        <p className="Stock__text">Сочные 300-граммовые роллы</p>
      </div>
      <div className="Stock__container">
        <button className="Stock__button">
          <img src={fish} alt='text'></img>
        </button>
        <p className="Stock__text">Охлажденный лосось</p>
      </div>
      <div className="Stock__container">
        <button className="Stock__button">
          <img src={rice} alt='text'></img>
        </button>
        <p className="Stock__text">Особый рецепт фирменного риса</p>
      </div>
      <div className="Stock__container">
        <button className="Stock__button">
          <img src={hat} alt='text'></img>
        </button>
        <p className="Stock__text">Оригинальная рецептура от Бренд-шефа</p>
      </div>
    </div>
  );
};
