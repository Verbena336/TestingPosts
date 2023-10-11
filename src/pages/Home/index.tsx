import Layout, { Content } from 'antd/es/layout/layout';
import React from 'react';
import styles from './Home.module.scss';
import { Col, Row } from 'antd';
import PostsList from 'widgets/PostsList';

function Home() {
  return (
    <Layout className={styles.layout}>
      <Content className={styles.content}>
        <Row justify="center">
          <Col span={24}>
            <PostsList />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default Home;
