import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import GamePage from './Pages/GamePage';
import MainPage from './Pages/MainPage';
import './App.css';
import NotFound from './Pages/NotFound';

function App() {
  const Games = useSelector((state: RootState) => state.games);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/game/:id" element={<GamePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

const games = [
  {
    title: 'The Fantasy Quest',
    releaseDate: '15.10.2023',
    publisher: 'Mystic Studios',
    developer: 'Adventure Game Studios',
    genre: 'Adventure',
    image: 'fantasy_quest_poster.jpg',
    screenshots: [
      'https://i.ytimg.com/vi/OEV8UK_Nn-w/maxresdefault.jpg',
      'https://i.ytimg.com/vi/OEV8UK_Nn-w/maxresdefault.jpg',
      'https://i.ytimg.com/vi/OEV8UK_Nn-w/maxresdefault.jpg',
    ],
    systemRequirements: {
      os: 'Windows 10',
      processor: 'Intel Core i5',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GeForce GTX 1060',
      storage: '20 GB available space',
    },
  },
  {
    title: 'Galactic Warfare',
    releaseDate: '28.07.2023',
    publisher: 'Stellar Games',
    developer: 'Space Dynamics Studios',
    genre: 'Sci-Fi FPS',
    image: 'galactic_warfare_poster.jpg',
    screenshots: ['screenshot1.jpg', 'screenshot2.jpg', 'screenshot3.jpg'],
    systemRequirements: {
      os: 'Windows 8.1',
      processor: 'AMD Ryzen 7',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GeForce RTX 3080',
      storage: '40 GB available space',
    },
  },
  {
    title: 'Medieval Legends Online',
    releaseDate: '03.12.2023',
    publisher: 'Mythical Entertainment',
    developer: 'Retro RPG Studios',
    genre: 'MMORPG',
    image: 'medieval_legends_poster.jpg',
    screenshots: ['screenshot1.jpg', 'screenshot2.jpg', 'screenshot3.jpg'],
    systemRequirements: {
      os: 'Windows 7',
      processor: 'Intel Core i7',
      memory: '12 GB RAM',
      graphics: 'AMD Radeon RX 5700',
      storage: '60 GB available space',
    },
  },
];
