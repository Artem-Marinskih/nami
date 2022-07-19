import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { MainPage } from './pages/MainPage/MainPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>{' '}
    </div>
  );
}

export default App;
