import { Delivery } from '../../components/Delivery/Delivery';
import { Header } from '../../components/Header/Header';
import { MainCarousel } from '../../components/MainСarousel/MainСarousel';
import { Menu } from '../../components/Menu/Menu';
import { Products } from '../../components/Products/Products';
import { Presentation } from '../../components/Presentation/Presentation';
import { Stock } from '../../components/Stock/Stock';
import { MainMap } from '../../components/MainMap/MainMap';

import './MainPage.scss';
import { Footer } from '../../components/Footer/Footer';


export const array = []

console.log(array)

export const MainPage = () => {
  // window.scrollTo(0, 0);

  return (
    <div className="MainPage">
      <a name="top"></a>
      <div className="MainPage__padding">
        <Header />
        <Menu />
        <MainCarousel />
        <Presentation />
        <Products />
        <Delivery />
        <Stock />
      </div>
      {/* <MainMap /> */}
      <div className="MainPage__padding">
        <Footer />
      </div>
    </div>
  );
};
