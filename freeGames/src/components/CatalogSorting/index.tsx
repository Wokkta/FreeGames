import React, { useEffect, useState } from 'react';
import { Select } from 'antd';

import styles from './CatalogSorting.module.sass';

import useFetch from '../../hooks/useFetch';

interface FetchOptionsState {
  platform?: string;
  category?: string;
  sortBy?: string;
}

const CatalogSorting: React.FC = () => {
  const [queryString, setQueryString] = useState<string>(''); // Хранение строки запроса
  const [category, setCategory] = useState<string | undefined>();
  const [platform, setPlatform] = useState<string | undefined>();
  const [sortBy, setSortBy] = useState<string | undefined>();

  useEffect(() => {
    buildQueryString({ platform, category, sortBy });
  }, [category, platform, sortBy]);

  useFetch({ queryString });

  // Функция для построения строки запроса
  const buildQueryString = (options: FetchOptionsState): string => {
    const queryParams = [];
    if (options.platform !== undefined) queryParams.push(`platform=${options.platform}`);
    if (options.category !== undefined) queryParams.push(`category=${options.category}`);
    if (options.sortBy !== undefined) queryParams.push(`sort-by=${options.sortBy}`);
    setQueryString(queryParams.join('&'));
    return queryParams.join('&');
  };

  const onChangeCategory = (value: string) => {
    setCategory(value);
    console.log(`selected ${value}`);
  };

  const onSort = (value: string) => {
    setSortBy(value);

    console.log('sorted by:', value);
  };

  const onSortByPlatform = (value: string) => {
    setPlatform(value);

    console.log('choosed platform:', value);
  };
  const onSearch = (value: string) => console.log(value);

  return (
    <div className={styles.content}>
      <Select
        popupClassName={styles.antSelect}
        className={styles.antSelect}
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
            value: 'mmorpg',
            label: 'MMORPG',
          },
          {
            value: 'shooter',
            label: 'Shooter',
          },
          {
            value: 'strategy',
            label: 'Strategy',
          },
          {
            value: 'moba',
            label: 'MOBA',
          },
          {
            value: 'racing',
            label: 'Racing',
          },
          {
            value: 'sports',
            label: 'Sports',
          },
          {
            value: 'social',
            label: 'Social',
          },
          {
            value: 'sandbox',
            label: 'Sandbox',
          },
          {
            value: 'open-world',
            label: 'Open World',
          },
          {
            value: 'survival',
            label: 'Survival',
          },
          {
            value: 'pvp',
            label: 'PvP',
          },
          {
            value: 'pve',
            label: 'PvE',
          },
          {
            value: 'pixel',
            label: 'Pixel',
          },
          {
            value: 'voxel',
            label: 'Voxel',
          },
          {
            value: 'zombie',
            label: 'Zombie',
          },
          {
            value: 'turn-based',
            label: 'Turn-Based',
          },
          {
            value: 'first-person',
            label: 'First-Person',
          },
          {
            value: 'third-person',
            label: 'Third-Person',
          },
          {
            value: 'top-down',
            label: 'Top-Down',
          },
          {
            value: 'tank',
            label: 'Tank',
          },
          {
            value: 'space',
            label: 'Space',
          },
          {
            value: 'sailing',
            label: 'Sailing',
          },
          {
            value: 'side-scroller',
            label: 'Side-Scroller',
          },
          {
            value: 'superhero',
            label: 'Superhero',
          },
          {
            value: 'permadeath',
            label: 'Permadeath',
          },
          {
            value: 'card',
            label: 'Card',
          },
          {
            value: 'battle-royale',
            label: 'Battle Royale',
          },
          {
            value: 'mmo',
            label: 'MMO',
          },
          {
            value: 'mmofps',
            label: 'MMOFPS',
          },
          {
            value: 'mmotps',
            label: 'MMOTPS',
          },
          {
            value: '3d',
            label: '3D',
          },
          {
            value: '2d',
            label: '2D',
          },
          {
            value: 'anime',
            label: 'Anime',
          },
          {
            value: 'fantasy',
            label: 'Fantasy',
          },
          {
            value: 'sci-fi',
            label: 'Sci-Fi',
          },
          {
            value: 'fighting',
            label: 'Fighting',
          },
          {
            value: 'action-rpg',
            label: 'Action RPG',
          },
          {
            value: 'action',
            label: 'Action',
          },
          {
            value: 'military',
            label: 'Military',
          },
          {
            value: 'martial-arts',
            label: 'Martial Arts',
          },
          {
            value: 'flight',
            label: 'Flight',
          },
          {
            value: 'low-spec',
            label: 'Low-Spec',
          },
          {
            value: 'tower-defense',
            label: 'Tower Defense',
          },
          {
            value: 'horror',
            label: 'Horror',
          },
          {
            value: 'mmorts',
            label: 'MMORTS',
          },
        ]}
      />
      <Select
        className={styles.antSelect}
        showSearch
        placeholder="Sort by"
        optionFilterProp="children"
        onChange={onSort}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={[
          {
            value: 'release-date',
            label: 'Release date',
          },
          {
            value: 'popularity',
            label: 'Popularity',
          },
          {
            value: 'alphabetical',
            label: 'Alphabetical',
          },
          {
            value: 'relevance',
            label: 'Relevance',
          },
        ]}
      />

      <Select
        className={styles.antSelect}
        showSearch
        placeholder="Platform"
        optionFilterProp="children"
        onChange={onSortByPlatform}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={[
          {
            value: 'pc',
            label: 'pc',
          },
          {
            value: 'browser',
            label: 'browser',
          },
          {
            value: 'all',
            label: 'all',
          },
        ]}
      />
    </div>
  );
};

export default CatalogSorting;
