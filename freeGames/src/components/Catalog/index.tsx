import { useEffect, useState } from 'react';
import GameSquire from '../GameSquire';
import styles from './Catalog.module.css';

interface Game {
  title: string;
  releaseDate?: string;
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
const Catalog: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
      setGames(result);
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
    (() => console.log(games))();
  }, []);

  return (
    <div className={styles.content}>
      {games[0] ? (
        games.map((game) => <GameSquire title={game.title} img={game.thumbnail} key={game.title} />)
      ) : (
        <GameSquire title={'  '} loading={loading} />
      )}
    </div>
  );
};
export default Catalog;
