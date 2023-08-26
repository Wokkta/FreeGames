import { Select } from 'antd';

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

const CatalogSorting: React.FC = () => {
  return (
    <div style={{ width: '100vw', height: '200px', background: 'black' }}>
      <Select
        showSearch
        placeholder="Select genre"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={[
          {
            value: 'action',
            label: 'Action',
          },
          {
            value: 'adventure',
            label: 'Adventure',
          },
          {
            value: 'rpg',
            label: 'Role-Playing',
          },
          {
            value: 'strategy',
            label: 'Strategy',
          },
          {
            value: 'shooter',
            label: 'Shooter',
          },
          {
            value: 'simulation',
            label: 'Simulation',
          },
          {
            value: 'sports',
            label: 'Sports',
          },
          {
            value: 'puzzle',
            label: 'Puzzle',
          },
          {
            value: 'horror',
            label: 'Horror',
          },
          {
            value: 'racing',
            label: 'Racing',
          },
        ]}
      />
    </div>
  );
};

export default CatalogSorting;
