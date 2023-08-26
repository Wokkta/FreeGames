import { Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import styles from './CatalogSorting.module.sass';
import { RootState } from '../../store';
import { setGames } from '../../store/Slices/gamesSlice';

const CatalogSorting: React.FC = () => {
  const dispatch = useDispatch();
  const Games = useSelector((state: RootState) => state.games);

  const onChangeCategory = (value: string) => {
    const maxRetryAttempts = 3; // Максимальное число попыток
    let retryCount = 0; // Счетчик попыток

    const fetchGames = async (newValue: string) => {
      const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${newValue}`;

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
      } catch (error) {
        console.error('Error fetching games:', error);
        if (retryCount < maxRetryAttempts) {
          retryCount++;
          console.log(`Retrying (${retryCount} of ${maxRetryAttempts})...`);
          fetchGames(value); // Повторяем запрос
        } else {
          console.error(`Max retry attempts (${maxRetryAttempts}) reached.`);
        }
      }
    };

    fetchGames(value);
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  return (
    <div className={styles.content}>
      <Select
        showSearch
        placeholder="Select genre"
        optionFilterProp="children"
        onChange={onChangeCategory}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={[
          {
            value: 'Shooter',
            label: 'Shooter',
          },
          {
            value: 'MMOARPG',
            label: 'MMOARPG',
          },
          {
            value: 'ARPG',
            label: 'ARPG',
          },
          {
            value: 'Strategy',
            label: 'Strategy',
          },
          {
            value: 'MMORPG',
            label: 'MMORPG',
          },
          {
            value: 'Fighting',
            label: 'Fighting',
          },
          {
            value: 'Action RPG',
            label: 'Action RPG',
          },
          {
            value: 'Battle Royale',
            label: 'Battle Royale',
          },
          {
            value: 'MOBA',
            label: 'MOBA',
          },
          {
            value: 'Sports',
            label: 'Sports',
          },
          {
            value: 'Racing',
            label: 'Racing',
          },
          {
            value: 'Card Game',
            label: 'Card Game',
          },
          {
            value: 'MMO',
            label: 'MMO',
          },
          {
            value: 'Social',
            label: 'Social',
          },
          {
            value: 'Fantasy',
            label: 'Fantasy',
          },
        ]}
      />
    </div>
  );
};

export default CatalogSorting;
