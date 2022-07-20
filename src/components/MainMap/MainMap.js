import { YMaps, Map, Polygon, Placemark } from 'react-yandex-maps';
import './MainMap.scss';

export const MainMap = () => {
  const mapData = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };
  return (
    <div className="MainMap">
      <YMaps>
        <Map
          defaultState={{
            center: [55.751574, 37.573856],
            zoom: 5,
          }}
          className='MainMap__map'
        >
          <Placemark geometry={[55.684758, 37.738521]} />
        </Map>
      </YMaps>
      
    </div>
  );
};
