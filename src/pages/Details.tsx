import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMissionsQuery } from '../redux/spacexApi';
import { Row, Col, Card, Image, Descriptions, Spin } from 'antd';

const Details = () => {
  const { id } = useParams();

  const { data } = useGetMissionsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data?.find((el: any) => el.flight_number == id),
    }),
  });

  console.log(data);
  const {
    flight_number,
    launch_date_local,
    launch_site,
    details,
    links,
    rocket,
    mission_name,
  } = data;

  return (
    <div>
      {data == undefined ? (
        <div className="spinner-wrapper">
          <Spin size="large" />
        </div>
      ) : (
        <Card title="View SpaceX Mission Detials">
          <Row gutter={[0, 20]}>
            <Col span={8}>
              <Image width={300} src={`${links?.mission_patch}`} />
            </Col>
            <Col span={16}>
              <Descriptions title={data?.fullName} layout="vertical">
                <Descriptions.Item label="Flight Details">
                  Mission Name: {mission_name}
                  {/* Flight Number: {flight_number} */}
                </Descriptions.Item>
                <Descriptions.Item label="Flight Description">
                  {details}
                </Descriptions.Item>
                <Descriptions.Item label="Lunch Site Details">
                  {launch_site.site_name_long}
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
