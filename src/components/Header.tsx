import { Layout, Menu } from 'antd'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const onMenuClick = (item: { key: string }) => {
    navigate(`/${item.key}`);
  };

  return (
    <Layout>
      <Menu
        onClick={onMenuClick}
        mode='horizontal'
        items={[
          {
            label: "Home",
            key: "",
          },
        ]}
      ></Menu>
    </Layout>
  )
}

export default Header