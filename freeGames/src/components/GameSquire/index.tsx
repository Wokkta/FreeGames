import React, { useState } from 'react';
import { Card, Skeleton } from 'antd';
import styles from './Game.module.sass';
import './index.sass';
import Meta from 'antd/es/card/Meta';

interface CardInfo {
  title: string;
  img?: string;
  loading?: boolean;
}

const GameSquire: React.FC<CardInfo> = ({ title, img, loading }) => {
  return (
    <div
      className={styles.cover}
      onClick={() => {
        alert('hello where');
      }}>
      <Card className={styles.card} cover={<img alt={loading ? '' : 'game banner'} src={img} />}>
        <Skeleton loading={loading} avatar active>
          <Meta title={title} />
        </Skeleton>
      </Card>
    </div>
  );
};

export default GameSquire;
