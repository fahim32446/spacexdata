import { useParams } from 'react-router-dom';
import { useGetMissionsQuery } from '../redux/spacexApi';
import { Row, Col, Card, Image, Descriptions, Spin } from 'antd';
import { format } from 'date-fns';

const Details = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetMissionsQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      data: data?.find((el: any) => el?.flight_number == id),
      isLoading,
    }),
  });


  return (
    <div>
      {data == undefined ? (
        <Spin size="large" />
      ) : (
        <Card title="View SpaceX Mission Detials">
          <Row>
            <Col span={8}>
              <Image width={300} src={`${data.links?.mission_patch}`} />
            </Col>
            <Col span={16}>
              <Descriptions title={data?.mission_name} layout="horizontal">
                <Descriptions.Item label="Mission Name">
                  {data.mission_name}
                </Descriptions.Item>
                <Descriptions.Item label="Flight Number">
                  {data.flight_number}
                </Descriptions.Item>

                <Descriptions.Item label="Rocket Type">
                  {data.rocket.rocket_type}
                </Descriptions.Item>

                <Descriptions.Item label="Lunch Site Details">
                  {data.launch_site.site_name_long}
                </Descriptions.Item>

                <Descriptions.Item label="Rocket Name">
                  {data.rocket.rocket_name}
                </Descriptions.Item>
                <Descriptions.Item label="Launch Date">
                  {format(
                    new Date(data.launch_date_utc),
                    'EEEE, MMMM dd, yyyy hh:mm a'
                  )}
                </Descriptions.Item>
                <Descriptions.Item label="Launch Success">
                  {data.launch_success
                    ? 'Successfully launched'
                    : 'Failed to launch'}
                </Descriptions.Item>
                <Descriptions.Item label="Flight Description">
                  {data.details}
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
        </Card>
      )}
    </div>
  );
};

export default Details;
