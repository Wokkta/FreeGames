import { useParams } from 'react-router-dom';

import GamePageHeader from '../components/UI/Headers/GamePageHeader';
import { GameContent } from '../components';
import NotFound from './NotFound';

const GamePage: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="game-page" style={{ color: 'white', width: '100vw', minHeight: '100vh' }}>
      <GamePageHeader />
      {<GameContent id={id || ''} /> || <NotFound />}
    </div>
  );
};

export default GamePage;
