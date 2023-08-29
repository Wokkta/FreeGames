import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setGames } from '../store/Slices/gamesSlice';

interface FetchOptionsState {
  queryString: string;
}

const useFetch = (initialOptions: FetchOptionsState) => {
  const dispatch = useDispatch();
  const maxRetryAttempts = 3;
  useEffect(() => {
    let retryCount = 0;

    const fetchGames = async (options: FetchOptionsState) => {
      const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?${options.queryString}`;

      const headers = {
        'X-RapidAPI-Key': '2206ee3d34msh12d125ce21f758ep1f37d6jsn7613baf538d4',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      };

      try {
        const response = await fetch(url, { method: 'GET', headers });
        const result = await response.json();
        dispatch(setGames(result));
      } catch (error) {
        console.error('Error fetching games:', error);
        if (retryCount < maxRetryAttempts) {
          retryCount++;
          console.log(`Retrying (${retryCount} of ${maxRetryAttempts})...`);
          fetchGames(options);
        } else {
          console.error(`Max retry attempts (${maxRetryAttempts}) reached.`);
        }
      }
    };

    fetchGames(initialOptions);
  }, [initialOptions.queryString]);
};

export default useFetch;
