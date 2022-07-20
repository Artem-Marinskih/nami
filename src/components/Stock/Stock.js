import roll from '../../assets/images/roll.png';
import './Stock.scss';

export const Stock = () => {
  return (
    <div className="Stock">
      <a name="stock"></a>
      <h2 className="Stock__title">Акции</h2>
      <div className="Stock__container">
        <div className="Stock__block">
          <div className="Stock__violet">
            <img src={roll} alt="roll" />
          </div>
          <h4>Название акции</h4>
          <p>Условия акции в одну или, что очень возможно, даже в 2 строки</p>
        </div>
        <div className="Stock__block">
          <div className="Stock__yellow">
            <img src={roll} alt="roll" />
          </div>
          <h4>Название акции</h4>
          <p>Условия акции в одну или, что очень возможно, даже в 2 строки</p>
        </div>
        <div className="Stock__block">
          <div className="Stock__red">
            <img src={roll} alt="roll" />
          </div>
          <h4>Название акции</h4>
          <p>Условия акции в одну или, что очень возможно, даже в 2 строки</p>
        </div>
      </div>
    </div>
  );
};
