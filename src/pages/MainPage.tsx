import { Catalog, CatalogSorting } from '../components';

function MainPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CatalogSorting />
      <Catalog />
    </div>
  );
}

export default MainPage;
