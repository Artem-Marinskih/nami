import arrow from '../../assets/images/arrowUp.png';
import './Delivery.scss';

export const Delivery = () => {
  return (
    <div className="Delivery">
      <a name="delivery"></a>
      <h2 className="Delivery__title">Условия доставки</h2>
      <div className="Delivery__container">
        <div className="Delivery__time">
          <h4>Время доставки</h4>
          <p>30-90 минут</p>
        </div>
        <div className="Delivery__hour">
          <h4>Часы доставки</h4>
          <p>10:00 - 22:00</p>
        </div>
        <div className="Delivery__money">
          <h4>Стоимость доставки</h4>
          <p>10:00 - 22:00</p>
        </div>
      </div>
      <p className="Delivery__text">
        Мы можем отказать в доставке в связи с незапланированным наплывом заказов, дорожной
        ситуацией или тем, что Ваш адрес не входит в зону доставки. Для подтверждения заказа и
        согласования деталей наш администратор свяжется по указанному в заказе телефону. При
        самовывозе и при доставке заказ можно оплатить наличными или картой
      </p>
      <a href="#top">
        <button className="Delivery__button">
          <img src={arrow}></img>
        </button>
      </a>
    </div>
  );
};
