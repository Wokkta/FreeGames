import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GamePage from './pages/GamePage';
import MainPage from './pages/MainPage';

import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/game" element={<NotFound />} />
          <Route path="/game/:id" element={<GamePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
