import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { MainPage } from './pages/MainPage/MainPage';
import { BasketPage } from './pages/BasketPage/BasketPage';
import './App.scss';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/basket" element={<BasketPage />} />
        </Routes>
      </BrowserRouter>{' '}
    </div>
  );
}

export default App;
