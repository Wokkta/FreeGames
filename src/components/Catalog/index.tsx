import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './Catalog.module.sass';
import { RootState } from '../../store';

import { GameSquire } from '..';
import { Alert, Card, Skeleton } from 'antd';

const Catalog: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const Games = useSelector((state: RootState) => state.games);

  useEffect(() => {
    console.clear();
    console.log(Games);
  }, []);
  useEffect(() => {
    if (Games.length > 0) setLoading(false);
  }, [Games]);
  return (
    <div className={styles.content}>
      {Games.length > 1 ? (
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
      ) : Games.length === 1 ? (
        <Alert
          message="Error 404 No such page found"
          description="We can't get games data from the server. Please reload the page. If not working, try again or connect developers"
          type="error"
          closable
        />
      ) : (
        <>
          <Card className={styles.loadingCard}>
            <Skeleton active={!loading} />
          </Card>
          <Card className={styles.loadingCard}>
            <Skeleton active={!loading} />
          </Card>
          <Card className={styles.loadingCard}>
            <Skeleton active={!loading} />
          </Card>
          <Card className={styles.loadingCard}>
            <Skeleton active={!loading} />
          </Card>
          <Card className={styles.loadingCard}>
            <Skeleton active={!loading} />
          </Card>
          <Card className={styles.loadingCard}>
            <Skeleton active={!loading} />
          </Card>
        </>
      )}
    </div>
  );
};
export default Catalog;
