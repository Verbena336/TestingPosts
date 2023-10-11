import React from 'react';
import Comment from 'entities/Comment';
import { Divider, List, Skeleton, Typography } from 'antd';
import { useGetCommentsQuery } from 'shared/api';
import { fakeData } from './config/fakeSkeletonData';
import { useParams } from 'react-router-dom';

function CommentList() {
  const { postId } = useParams();
  const { data, isError } = useGetCommentsQuery({ id: postId! });

  return (
    <div>
      {!isError && (
        <>
          <Divider orientation="left" orientationMargin="0" style={{ marginTop: '0' }}>
            <Typography.Title level={4} style={{ margin: '0' }}>
              Comments:
            </Typography.Title>
          </Divider>
          <List
            itemLayout="horizontal"
            dataSource={data ? data : fakeData}
            renderItem={(item) => {
              return data ? (
                <Comment comment={item} />
              ) : (
                <List.Item>
                  <Skeleton active />
                </List.Item>
              );
            }}
          />
        </>
      )}
    </div>
  );
}

export default CommentList;
