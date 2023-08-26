import { CatalogSorting } from '../components';
import Catalog from '../components/Catalog';

function MainPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CatalogSorting />
      <Catalog />
    </div>
  );
}

export default MainPage;
