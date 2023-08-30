import { Descriptions, Divider, Typography } from 'antd';
import styles from './GameDesc.module.sass';
import type { DescriptionsProps } from 'antd';

interface GameDescInfo {
  title: string;
  release_date: string;
  publisher: string;
  developer: string;
  genre: string;
  description: string;
  systemRequirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
}

const GameDesc: React.FC<GameDescInfo> = ({
  title,
  release_date,
  publisher,
  developer,
  genre,
  description,
  systemRequirements,
}) => {
  function reverseDate(dateString: string) {
    const [year, month, day] = dateString.split('-');
    return `${day}.${month}.${year}`;
  }
  //console.log(description);
  const items: DescriptionsProps['items'] = [
    {
      key: '5',
      label: 'Title',
      children: title,
    },
    {
      key: '1',
      label: 'Release Date',
      children: release_date ? reverseDate(release_date) : '',
    },
    {
      key: '2',
      label: 'Publisher',
      children: publisher,
    },
    {
      key: '3',
      label: 'Developer',
      children: developer,
    },
    {
      key: '4',
      label: 'Genre',
      children: genre,
    },
  ];

  const requirements: DescriptionsProps['items'] = [
    {
      key: '5',
      label: 'OS',
      children: systemRequirements?.os,
    },
    {
      key: '1',
      label: 'Memory',
      children: systemRequirements?.memory,
    },
    {
      key: '2',
      label: 'Processor',
      children: systemRequirements?.processor,
    },
    {
      key: '3',
      label: 'Storage',
      children: systemRequirements?.storage,
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <Descriptions title="Game Info" items={items} className={styles.descriptions} />
        <Divider />
        <Descriptions
          title="System Requirements"
          items={requirements}
          className={styles.descriptions}
        />
        <Divider />
        <Typography className={styles.typography}>{description}</Typography>
      </div>
    </>
  );
};
export default GameDesc;
