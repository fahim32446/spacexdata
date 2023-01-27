import React, {useState} from 'react';
import MissionCard from '../components/MissionCard';
import { useGetMissionsQuery } from '../redux/spacexApi';
import { List, Typography, Select, Input } from 'antd';


interface Item {
  details: string;
  flight_number: Number;
  is_tentative: Boolean;
}

interface Rocket {
  rocket: {
    rocket_name: string;
  };
}

export interface IHomePageProps {}

const Home: React.FunctionComponent<IHomePageProps> = () => {
  const { data, isLoading } = useGetMissionsQuery('');
  const [sortOrder, setSortOrder] = useState('Default');
  const [searchText, setSearchText] = useState('');

  const getSortedItems = () => {
    if (!isLoading) {
      const sortedItems = [...data];
      sortedItems.sort((a, b): any => {
        const dateA = new Date(a.launch_date_utc);
        const dateB = new Date(b.launch_date_utc);
        let weekA = Math.ceil((dateA.getUTCDate() + dateA.getUTCDay()) / 7);
        let weekB = Math.ceil((dateB.getUTCDate() + dateB.getUTCDay()) / 7);

        if (sortOrder === 'success') {
          return b.launch_success - a.launch_success;
        } else if (sortOrder === 'failure') {
          return a.launch_success - b.launch_success;
        } else if (sortOrder === 'lastYear') {
          return dateB.getTime() - dateA.getTime();
        } else if (sortOrder === 'week') {
          return weekB - weekA;
        }else if (sortOrder === 'upcoming'){
          return b.upcoming - a.upcoming;
        }
      });
      return sortedItems;
    }
  };

  let filteredData = getSortedItems() as Rocket[];

  if (searchText !== '') {
    filteredData = filteredData.filter((el) =>
      el.rocket.rocket_name?.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return (
    <div>
      <div style={{ margin: '10px 0px' }}>
        <Typography.Text>Filter Lunch By: </Typography.Text>
        <Select
          onChange={(value) => {
            setSortOrder(value);
          }}
          defaultValue={'Default'}
          options={[
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Success',
              value: 'success',
            },
            {
              label: 'Failure',
              value: 'failure',
            },
            {
              label: 'Week',
              value: 'week',
            },
            {
              label: 'Last Year',
              value: 'lastYear',
            },
            {
              label: 'Upcoming',
              value: 'upcoming',
            },
          ]}
        ></Select>

        <Input
          placeholder="Search by rocket name"
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 200, margin:"0px 30px" }}
        />
      </div>

      <List
        loading={isLoading}
        pagination={{
          onChange: (page) => {},
          pageSize: 12,
        }}
        grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 6 }}
        dataSource={filteredData}
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
