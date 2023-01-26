import MissionCard from "../components/MissionCard";
import { useGetMissionsQuery } from "../redux/spacexApi";
import { List } from "antd";

interface Item {
  details: string;
  flight_number: Number;
  is_tentative: Boolean;
}
export interface IHomePageProps {}

const Home: React.FunctionComponent<IHomePageProps> = () => {
  const { data, isLoading } = useGetMissionsQuery("");

  

  return (
    <div>
      <List
        loading={isLoading}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 12,
        }}
        grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 6 }}
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
