import React from 'react';
import Menu from './components/MenuBar'
import ProfileCard from './components/ProfileCard'
import PostCard from './components/PostCard'
import TimelinePosts from './components/Timeline'
import Posts from './components/Posts'
import { Layout, Row, Col } from 'antd'
import 'antd/dist/antd.css';

import logo from './logo.svg';
import './App.css';

const { Header, Sider, Content } = Layout
function App() {
  return (
    <div>
      <Row>
        <Col span={24}>
          <Header className="header" style={{ marginTop: '-15px', paddingTop: '20px' }}>
            <Menu></Menu>
          </Header>
        </Col>
      </Row>
      <Row type="flex" justify="space-around" style={{ marginTop: "25px" }}>
        <Col span={6}>
          <ProfileCard></ProfileCard>
          <Posts title="Recent trending"></Posts>
        </Col>
        <Col span={15}>
          <PostCard></PostCard>
          <Posts title="Ade Firman Fauzi" content="I don't give a fuck!"></Posts>
          <Posts></Posts>
          <Posts></Posts>
          <Posts></Posts>
        </Col>
      </Row>
    </div>
  );
}

export default App;
