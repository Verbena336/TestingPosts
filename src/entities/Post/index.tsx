import { Card } from 'antd';
import React from 'react';
import { postResponce } from 'shared/api/types';
import styles from './Post.module.scss';
import NavigateButton from 'shared/ui/NavigateButton';

type Props = { post: postResponce };

function Post({ post }: Props) {
  return (
    <Card className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <span className={styles.text}>
            <span className={styles.id}>{post.id} </span>
            <strong className={styles.title}>{post.title}: </strong>
            <span>{post.body}</span>
          </span>
        </div>
        <NavigateButton text={'Просмотр'} to={`/post/${post.id}`} />
      </div>
    </Card>
  );
}

export default Post;
