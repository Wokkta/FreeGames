import React from 'react';
import { Card, Skeleton } from 'antd';
import styles from './Game.module.sass';
import './index.sass';
import Meta from 'antd/es/card/Meta';
import { Link } from 'react-router-dom';

interface CardInfo {
  title: string;
  img: string;
  id: number;
  loading?: boolean;
  release_date: string | undefined;
  publisher: string | undefined;
  genre: string;
}
/*
Каждая игра в списке содержит:

    название
    дата релиза (в российском формате)
    издатель
    жанр
    картинка

*/
const GameSquire: React.FC<CardInfo> = ({
  title,
  img,
  loading,
  release_date,
  publisher,
  genre,
  id,
}) => {
  function reverseDate(dateString: string) {
    const [year, month, day] = dateString.split('-');
    return `${day}.${month}.${year}`;
  }

  return (
    <Link to={`/game/${id}`}>
      <div
        className={styles.cover}
        onClick={() => {
          console.log(`going to ${title} with id ${id}`);
        }}>
        <Card
          className={styles.card}
          cover={<img alt={loading ? '' : 'No game found'} src={img} />}
          style={id === Infinity ? { paddingLeft: '20px' } : {}}>
          <Skeleton loading={loading} avatar active>
            <Meta title={title} />
            <p>{release_date ? reverseDate(release_date) : ''}</p>
            <p>{publisher}</p>
            <p>{genre}</p>
          </Skeleton>
        </Card>
      </div>
    </Link>
  );
};

export default GameSquire;
