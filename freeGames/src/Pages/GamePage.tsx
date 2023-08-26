import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import ScreenshotCarousel from '../components/UI/ScreenshotCarousel';
import { Link } from 'react-router-dom';

interface Game {
  title: string;
  releaseDate: string;
  publisher: string;
  developer: string;
  genre: string;
  image: string;
  screenshots: string[];
  systemRequirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
}

const GamePage: React.FC<{ gameData: Game }> = ({ gameData }) => {
  return (
    <div className="game-page" style={{ color: 'white', width: '100vw', minHeight: '100vh' }}>
      <Link to="/">
        <Button
          className={`ant-btn-dark`} // Используем ant-btn-dark для темной темы
          onClick={() => console.log('gone to main page')}
          icon={<LeftOutlined />}
        />
      </Link>

      <ScreenshotCarousel screenshots={gameData.screenshots} />

      <h1>{gameData.title}</h1>
      <p>Release Date: {gameData.releaseDate}</p>
      <p>Publisher: {gameData.publisher}</p>
      <p>Developer: {gameData.developer}</p>
      <p>Genre: {gameData.genre}</p>
    </div>
  );
};

export default GamePage;
