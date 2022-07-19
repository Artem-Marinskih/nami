import './Menu.scss';

export const Menu = () => {
  return (
    <nav className="Menu">
      <button className="Menu__button Menu__button-grey">меню</button>
      <button className="Menu__button">доставка и оплата</button>
      <button className="Menu__button">акции</button>
      <button className="Menu__button">контакты</button>
    </nav>
  );
};