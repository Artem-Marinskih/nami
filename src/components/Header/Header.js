import { useCallback } from 'react';
import logo from '../../assets/images/logo.svg';
import vk from '../../assets/images/vk.svg';
import basket from '../../assets/images/basket.png';
import './Header.scss';

export const Header = () => {
  const autoFocus = useCallback((el) => (el ? el.focus() : null), []);
  return (
    <header id="main" className="Header">
      <img className="Header__logo" src={logo} alt="logo:nami" />
      <input
        className="Header__search"
        type="text"
        value=""
        placeholder="Поиск"
        ref={autoFocus}
      ></input>
      <button className="Header__basket">
        <img src={basket} alt="basket"></img>
        <p>корзина</p>
      </button>
      <ul className="Header__line">
        <li>
          <a href="tel:+79221521563" className="Header__phone">
            8 999 111 22 33
          </a>
        </li>
        <li className="Header__time">
          <p>время работы</p>
        </li>
      </ul>
      <button className="Header__vk">
        <img src={vk} alt="vk"></img>{' '}
      </button>
    </header>
  );
};
