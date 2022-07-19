import './Container.scss';

export const Container = ({id, imgPath, title, text, weight, money}) => {
  return (
    <div className="Container">
      <div className="Container__image">
      <img  src={imgPath} alt={title} />
      </div>
      <h4 className="Container__title">{title}</h4>
      <p className="Container__text">{text}</p>
      <p className="Container__weight">{weight}</p>
      <div className="Container__buy">
        <p className="Container__money">{money}</p>
        <button className="Container__button">В корзину</button>
      </div>
    </div>
  );
};
