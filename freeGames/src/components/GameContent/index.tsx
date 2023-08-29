import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';

import ScreenshotCarousel from '../UI/ScreenshotCarousel';
import { GameDesc } from '..';
import styles from './GameContent.module.sass';
interface Game {
  id: number;
  title: string;
  release_date: string;
  publisher: string;
  developer: string;
  genre: string;
  thumbnail: string;
  screenshots?: screenshot[];
  systemRequirements?: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
}
interface screenshot {
  image: string;
  id: number;
}
type GameContentProps = {
  id: string;
};

const GameContent: React.FC<GameContentProps> = ({ id }) => {
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      let gameData = localStorage.getItem('game');
      const fetchedGameData = await fetchGame();
      await setGame(fetchedGameData);
      /*
      if (!gameData) {
        try {
          const fetchedGameData = await fetchGame();
          gameData = JSON.stringify(fetchedGameData);
          localStorage.setItem('game', gameData);
        } catch (error) {
          console.error(error);
          return;
        }
      }

      const parsedGameData: Game = await JSON.parse(gameData);
      await setGame(parsedGameData);
      */
    };

    fetchData();
  }, []);

  const fetchGame = async () => {
    try {
      const response = await axios.get(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
        {
          headers: {
            'X-RapidAPI-Key': '2206ee3d34msh12d125ce21f758ep1f37d6jsn7613baf538d4',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
          },
        },
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.content}>
      {game ? (
        <>
          <ScreenshotCarousel screenshots={game.screenshots} />

          <GameDesc
            title={game.title}
            genre={game.genre}
            publisher={game.publisher}
            release_date={game.release_date}
            developer={game.developer}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default GameContent;
