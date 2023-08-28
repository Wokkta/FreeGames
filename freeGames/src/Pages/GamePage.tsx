import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import ScreenshotCarousel from '../components/UI/ScreenshotCarousel';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface Game {
  id: number;
  title: string;
  release_date?: string;
  publisher?: string;
  developer?: string;
  genre: string;
  thumbnail: string;
  screenshots?: string[];
  systemRequirements?: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
}

const GamePage: React.FC = () => {
  const { id } = useParams();
  const Games = useSelector((state: RootState) => state.games);
  const ourId = id || Infinity;
  if (ourId === Infinity) {
    // Обработка случая, когда игра с указанным id не найдена
    return <div>Game not found</div>;
  }
  const gameData: Game | undefined = Games.find((g) => g.id === +ourId);

  return (
    <div className="game-page" style={{ color: 'white', width: '100vw', minHeight: '100vh' }}>
      <Link to="/">
        <Button
          className={`ant-btn-dark`}
          onClick={() => console.log('gone to main page')}
          icon={<LeftOutlined />}
        />
      </Link>
      {gameData ? (
        <>
          <ScreenshotCarousel screenshots={gameData.screenshots} />

          <h1>{gameData.title}</h1>
          <p>Release Date: {gameData.release_date}</p>
          <p>Publisher: {gameData.publisher}</p>
          <p>Developer: {gameData.developer}</p>
          <p>Genre: {gameData.genre}</p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default GamePage;
