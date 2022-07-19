import { Container } from '../Container/Container';
import { Data } from './Set.const';
import './Set.scss';

export const Set = () => {
  return (
    <div className="Set">
      <h2 className="Set__title">Наборы</h2>
      <div className="Set__flex">
        {Data.map((card) => (
          <Container
            key={card.id}
            id={card.id}
            imgPath={card.imgPath}
            title={card.title}
            text={card.text}
            weight={card.weight}
            money={card.money}
          />
        ))}
      </div>
    </div>
  );
};
