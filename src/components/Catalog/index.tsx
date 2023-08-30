import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './Catalog.module.sass';
import { RootState } from '../../store';

import { GameSquire } from '..';

const Catalog: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const Games = useSelector((state: RootState) => state.games);

  useEffect(() => {
    console.clear();
    console.log(Games);
  }, []);
  useEffect(() => {
    if (Games.length > 1) setLoading(false);
  }, [Games]);
  return (
    <div className={styles.content}>
      {Games[2] ? (
        Games.map((game) => (
          <GameSquire
            title={game.title}
            img={game.thumbnail}
            key={game.id}
            id={game.id}
            genre={game.genre}
            release_date={game.release_date}
            publisher={game.publisher}
            loading={loading}
          />
        ))
      ) : (
        <GameSquire
          title={''}
          img={''}
          id={Infinity}
          genre={''}
          release_date={''}
          publisher={''}
          loading={loading}
        />
      )}
    </div>
  );
};
export default Catalog;
