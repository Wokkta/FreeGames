import { useState, useEffect } from 'react';
import axios from 'axios';

import ScreenshotCarousel from '../UI/ScreenshotCarousel';
import { GameDesc } from '..';
import styles from './GameContent.module.sass';
import { Image } from 'antd';

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
  timestamp?: number;
  description: string;
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
      let storedGame: Game | null = null;
      const storedGameString = localStorage.getItem(`game_${id}`);
      if (storedGameString) {
        storedGame = JSON.parse(storedGameString);
        const storedTimestamp = storedGame?.timestamp;
        const currentTimestamp = new Date().getTime();
        const fiveMinutes = 5 * 60 * 1000;

        if (storedTimestamp && currentTimestamp - storedTimestamp > fiveMinutes) {
          storedGame = await fetchGame();
          if (storedGame) storedGame.timestamp = currentTimestamp;
          localStorage.setItem(`game_${id}`, JSON.stringify(storedGame));
        }
      } else {
        storedGame = await fetchGame();
        if (storedGame) storedGame.timestamp = new Date().getTime();
        localStorage.setItem(`game_${id}`, JSON.stringify(storedGame));
      }

      setGame(storedGame);
    };

    fetchData();
  }, [id]);

  const fetchGame = async () => {
    let attempts = 3;
    try {
      while (attempts > 0) {
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
      }
    } catch (error) {
      attempts--;

      if (attempts === 0) {
        alert('Ошибка при выполнении запроса');
        console.error(error);
      }
    }
  };

  if (!game) {
    return null;
  }

  return (
    <div className={styles.content}>
      <ScreenshotCarousel screenshots={game.screenshots} />
      <div className={styles.info}>
        <Image className={styles.thumbnail} src={game.thumbnail} preview={false} />
        <GameDesc
          title={game.title}
          genre={game.genre}
          publisher={game.publisher}
          release_date={game.release_date}
          developer={game.developer}
          description={game.description}
        />
      </div>
    </div>
  );
};

export default GameContent;
