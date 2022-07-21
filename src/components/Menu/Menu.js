import './Menu.scss';

export const Menu = () => {
 
  return (
    <nav className="Menu">
      <a href="#products">
      <button className="Menu__button Menu__button-grey">меню</button>
      </a>
      <a href="#delivery">
        <button className="Menu__button">доставка и оплата</button>
      </a>
      <a href="#stock">
        <button className="Menu__button">акции</button>
      </a>

      <button className="Menu__button">контакты</button>
    </nav>
  );
};
