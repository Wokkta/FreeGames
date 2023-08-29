import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import styles from './GamePageHeader.module.sass';
import { Button } from 'antd';
function GamePageHeader() {
  return (
    <div className={styles.content}>
      <Link to="/">
        <Button
          className={`ant-btn-dark`}
          onClick={() => console.log('gone to main page')}
          icon={<LeftOutlined />}
        />
      </Link>
    </div>
  );
}

export default GamePageHeader;
