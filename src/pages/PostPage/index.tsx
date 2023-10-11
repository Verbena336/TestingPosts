import { Card, Col, Row } from 'antd';
import Layout, { Content } from 'antd/es/layout/layout';
import React from 'react';
import styles from './PostPage.module.scss';
import PostInfo from 'entities/PostInfo';
import CommentList from 'widgets/CommentList';

function PostPage() {
  return (
    <Layout className={styles.layout}>
      <Content className={styles.content}>
        <Row justify="center">
          <Col span={20}>
            <Card>
              <PostInfo />
              <CommentList />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default PostPage;
