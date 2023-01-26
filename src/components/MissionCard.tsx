import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';
const { Meta } = Card;

interface IProps {
  item: {
    details: string;
    mission_name: String;
    flight_number: Number;
    is_tentative: Boolean;
    links: {
      mission_patch: string;
      // mission_patch_small: string;
      // reddit_campaign: string;
      // reddit_launch: string;
      // reddit_recovery: string;
      // reddit_media: string;
      // presskit: string;
      // article_link: string;
      // wikipedia: string;
      // video_link: string;
      // youtube_id: string;
    };
    launch_site: {
      site_name: string;
      site_name_long: string;
    };
  };
}

const MissionCard = ({ item }: IProps) => {

  const navigate = useNavigate();
  const { mission_name, links, launch_site, flight_number } = item;

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
      <Meta
        title={mission_name}
        description={launch_site.site_name_long}
      />
    </Card>
  );
};

export default MissionCard;
