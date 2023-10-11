import { List } from 'antd';
import React from 'react';
import { commentResponce } from 'shared/api/types';

type Props = { comment: commentResponce };

function Comment({ comment }: Props) {
  return (
    <List.Item>
      <List.Item.Meta title={comment.name} description={comment.body} />
    </List.Item>
  );
}

export default Comment;
