import {
  MenuOutlined,
  HomeOutlined,
  PlaySquareOutlined,
  ThunderboltOutlined,
  DownloadOutlined,
  FieldTimeOutlined,
  PlayCircleOutlined,
  LikeOutlined,
  FireOutlined,
  UsbOutlined,
  BulbOutlined,
  BgColorsOutlined,
  // Link
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import youtubeImage from "./images/youtube.webp";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { Shorts } from "./components/shorts";
import { Subscriptions } from "./components/subscriptions";
import { History } from "./components/history";
import { YourVideos } from "./components/yourvideos";
import { LikedVideos } from "./components/likedvideos";
import { TrendingVideos } from "./components/trendingvideos";
import { Music } from "./components/music";
import { Learning } from "./components/learning";
import { Library } from "./components/library";
// import { Learning } from "./components/learning";
const { Header, Sider, Content } = Layout;
const App = () => {



//  // Home 
//   const Home =()=>{
//     return <Home/>
//   }
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgBase },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100%" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ backgroundColor: "white" }}>
        <div className="demo-logo-vertical" />
        <div className="container">
          <Button
            type="text"
            icon={collapsed ? <MenuOutlined /> : <MenuOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="youtube">
            <span>
              <a href="https://www.youtube.com/">
                <img src={youtubeImage} alt="Youtube" className="youtubeIcon" />
              </a>
            </span>
            <a href="https://www.youtube.com/">
              <span className="youtube_text">YouTube</span>
            </a>
          </div>
        </div>

        <Menu 
          theme="white"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined style={{ fontSize: "25px" }} />,
              label: <p style={{ fontSize: "17px" }}>Home</p>,
            },
            {
              key: "2",
              icon: <ThunderboltOutlined style={{ fontSize: "25px" }} />,
              label: <p style={{ fontSize: "17px" }}>Shorts</p>,
            },
            {
              key: "3",
              icon: <PlaySquareOutlined style={{ fontSize: "25px" }} />,
              label: <p style={{ fontSize: "17px" }}>Subscriptions</p>,
            },
            {
              key: "4",
              icon: <FieldTimeOutlined style={{ fontSize: "25px" }} />,
              label: <p style={{ fontSize: "17px" }}>History</p>,
            },
            {
              key: "5",
              icon: <PlayCircleOutlined style={{ fontSize: "25px" }} />,
              label: <p style={{ fontSize: "17px" }}>Your videos</p>,
            },
            {
              key: "6",
              icon: <LikeOutlined style={{ fontSize: "25px" }} />,
              label: <p style={{ fontSize: "17px" }}>Liked videos</p>,
            },
            {
              key: "7",
              icon: <FireOutlined style={{ fontSize: "25px" }} />,
              label: <p style={{ fontSize: "17px" }}>Trending videos</p>,
            },
            {
              key: "8",
              icon: <UsbOutlined style={{ fontSize: "25px" }} />,
              label: <p style={{ fontSize: "17px" }}>Music</p>,
            },
            {
              key: "9",
              icon: <BulbOutlined style={{ fontSize: "25px" }} />,
              label: <p style={{ fontSize: "17px" }}>Learning</p>,
            },
            {
              key: "10",
              icon: <BgColorsOutlined style={{ fontSize: "25px" }} />,
              label: <p style={{ fontSize: "17px" }}>Library</p>,
            },
          ]}
        />
      </Sider>

      <Layout>

        <Header
          style={{
            padding: 0,
            background: colorBgBase,
          }}>
            <div className="form-controls">
            <form className="mx-auto mt-2 mb-2 d-flex align-items-center form">
              <div className="search-input-container">
                <input
                  className="form-control search-input"
                  type="text"
                  placeholder="Search"
                />
                <button className="search-button">
                  <i className="ri-search-line"></i>
                </button>
              </div>
            </form>
            <i className="ri-mic-fill microphone"></i>
            <i className="ri-video-add-line video_add"></i>
            <i className="ri-notification-2-line notification"></i>
            <i className="ri-user-add-line user"></i>
            </div>
          
          </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgBase,
          }}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shorts" element={<Shorts/>}/>
            <Route path="/subscriptions" element={<Subscriptions/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/yourvideos" element={<YourVideos/>}/>
            <Route path="/likedvideos" element={<LikedVideos/>}/>
            <Route path="/trendingvideos" element={<TrendingVideos/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/learning" element={<Learning/>}/>
            <Route path="/library" element={<Library/>}/>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
