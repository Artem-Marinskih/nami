import { Container } from '../Container/Container';
import { SetTitle } from '../SetTitle/SetTitle';
import './Set.scss';

export const Set = ({Data, title}) => {
  return (
    <div className="Set">
      <SetTitle title={title}/>
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
