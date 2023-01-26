import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';
import { format } from 'date-fns';
const { Meta } = Card;

interface IProps {
  item: {
    details: string;
    mission_name: String;
    flight_number: Number;
    is_tentative: Boolean;
    launch_date_utc: Date;
    rocket: {
      rocket_name: string;
    };
    launch_success: boolean;
    links: {
      mission_patch: string;
    };
    launch_site: {
      site_name: string;
      site_name_long: string;
    };
  };
}

const MissionCard = ({ item }: IProps) => {
  const navigate = useNavigate();
  const {
    mission_name,
    links,
    launch_site,
    flight_number,
    launch_date_utc,
    launch_success,
    rocket,
  } = item;

  const handleClick = (flight_number: Number) => {
    navigate(`../details/${flight_number}`);
  };

  return (
    <Card
      onClick={() => handleClick(flight_number)}
      style={{ width: 300 }}
      hoverable={true}
      cover={<img alt="Image" src={links.mission_patch} />}
    >
      <Meta title={mission_name} description={launch_site.site_name_long} />
      <div style={{ margin: '10px 0px', color: 'grey' }}>
        {format(new Date(launch_date_utc), 'EEEE, MMMM dd, yyyy hh:mm a')}
      </div>
      <div style={{ color: 'grey' }}>
        {launch_success ? 'Successfully launched' : 'Failed to launch'}
      </div>
      <div style={{ color: 'grey' }}>{rocket.rocket_name}</div>
    </Card>
  );
};

export default MissionCard;
