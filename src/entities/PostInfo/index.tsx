import { Divider, Skeleton, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useGetPostByIdQuery } from 'shared/api';
import NavigateButton from 'shared/ui/NavigateButton';
const { Title, Paragraph, Text } = Typography;
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

function PostInfo() {
  const { postId } = useParams();
  const { data, isError, isLoading } = useGetPostByIdQuery({ id: postId! });

  useEffect(() => {
    if (isError) {
      toast('Oops, something went wrong!');
    }
  }, [isError]);

  return (
    <div>
      <Divider orientation="left" orientationMargin="0" style={{ marginTop: '0' }}>
        <NavigateButton text={'Назад'} to={'/'} />
      </Divider>
      <Skeleton active style={{ marginBottom: '16px' }} loading={isLoading} />
      {data && (
        <Typography>
          <Text strong underline>
            userId: {data.userId}
          </Text>
          <Title level={3} style={{ marginTop: '0px' }}>
            {`#${data.id} ${data.title}`}
          </Title>
          <Paragraph>{data.body}</Paragraph>
        </Typography>
      )}
    </div>
  );
}

export default PostInfo;
