import Heder from '../components/Header';
import MissionCard from '../components/MissionCard';
import { useGetMissionsQuery } from '../redux/spacexApi';
import { List } from 'antd';

interface Item {
  details: string;
  flight_number: Number;
  is_tentative: Boolean;
}

const Home = () => {
  const { data, isLoading } = useGetMissionsQuery('');

  return (
    <div>
      <Heder />
      <List
        loading={isLoading}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 12,
        }}
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={(item: Item) => (
          <List.Item>
            <MissionCard item={item as any} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Home;
