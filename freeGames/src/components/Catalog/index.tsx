import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GameSquire from '../GameSquire';
import styles from './Catalog.module.css';
import { RootState } from '../../store';
import { setGames } from '../../store/Slices/gamesSlice';

const Catalog: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const Games = useSelector((state: RootState) => state.games);

  useEffect(() => {
    console.log(Games);
  }, []);
  const maxRetryAttempts = 3; // Максимальное число попыток
  let retryCount = 0; // Счетчик попыток

  const fetchGames = async () => {
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2206ee3d34msh12d125ce21f758ep1f37d6jsn7613baf538d4',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      dispatch(setGames(result));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching games:', error);
      if (retryCount < maxRetryAttempts) {
        retryCount++;
        console.log(`Retrying (${retryCount} of ${maxRetryAttempts})...`);
        fetchGames(); // Повторяем запрос
      } else {
        console.error(`Max retry attempts (${maxRetryAttempts}) reached.`);
      }
    }
  };

  useEffect(() => {
    console.clear();
    fetchGames();
  }, []);

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
