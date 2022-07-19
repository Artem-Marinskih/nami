
import { Header } from '../../components/Header/Header';
import { MainCarousel } from '../../components/MainСarousel/MainСarousel';
import { Menu } from '../../components/Menu/Menu';
import { Products } from '../../components/Products/Products';
import { Stock } from '../../components/Stock/Stock';

import './MainPage.scss';




export const MainPage = () => {
  window.scrollTo(0, 0);

  return (
    <div className="MainPage">
      <Header />
      <Menu />
      <MainCarousel/>
      <Stock />
      <Products />
    </div>
  );
};
