import './Container.scss';
import { array } from '../../pages/MainPage/MainPage';

export const Container = ({ id, imgPath, title, text, weight, money }) => {
  
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

    array.push(productObject);
  };


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
