import { Pagination } from 'antd';
import { CatalogSorting } from '../components';
import Catalog from '../components/Catalog';

function MainPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CatalogSorting />
      <Catalog />
      <Pagination simple defaultCurrent={2} total={50} />
    </div>
  );
}

export default MainPage;
