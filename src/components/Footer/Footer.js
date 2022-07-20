import logo from '../../assets/images/logo.svg';
import './Footer.scss';

export const Footer = () => {
  return (
    <nav className="Footer">
      <div className="Footer__block">
        <img className="Footer__logo" src={logo} alt="logo:nami" />
      </div>
      <ul className="Footer__block">
        <li>
          <a href="#products" className="Footer__link">
            Наборы
          </a>
        </li>
        <li>
          <a href="#products" className="Footer__link">
            Фирменные роллы
          </a>
        </li>
        <li>
          <a href="#products" className="Footer__link">
            Запеченный роллы
          </a>
        </li>
      </ul>
      <ul className="Footer__block">
        <li>
          <a href="#products" className="Footer__link">
            Темпура роллы
          </a>
        </li>
        <li>
          <a href="#products" className="Footer__link">
            Дополнения
          </a>
        </li>
        <li>
          <a href="#products" className="Footer__link">
            Напитки
          </a>
        </li>
      </ul>
      <ul className="Footer__block">
        <li>
          <a href="#delivery" className="Footer__link">
            Доставка и оплата
          </a>
        </li>
        <li>
          <a href="#stock" className="Footer__link">
            Акции
          </a>
        </li>
      </ul>
      <div className="Footer__block Footer__block-contacts">
        
          <a href="tel:+8 999 111 22 33" className="Footer__phone">
            8 999 111 22 33
          </a>
        
          <p>время работы</p>
        
          <p>Адрес, Город, ул. Такая-то, стр. 0</p>
        
      </div>
    </nav>
  );
};
