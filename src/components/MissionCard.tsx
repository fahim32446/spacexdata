import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';
const { Meta } = Card;

interface IProps {
  item: {
    details: string;
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
  console.log(item);
  const navigate = useNavigate();
  const { links, launch_site } = item;
  
  const handleClick = (id: Number)=>{
    navigate(`../details/${id}`);
    
  }

  return (
    <Card
    onClick={handleClick}
      style={{ width: 300 }}
      hoverable={true}
      cover={<img alt="Image" src={links.mission_patch} />}
    >
      <Meta
        title={launch_site.site_name}
        description={launch_site.site_name_long}
      />
    </Card>
  );
};

export default MissionCard;

