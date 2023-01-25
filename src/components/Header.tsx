import { Layout, Menu } from 'antd'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const { Header, Content, Footer } = Layout;
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
          {
            label: "Test",
            key: "test",
          },
        ]}
      ></Menu>
    </Layout>
  )
}

export default Header