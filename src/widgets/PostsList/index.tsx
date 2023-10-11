import React, { useEffect, useRef } from 'react';
import { useGetPostsQuery } from '../../shared/api';
import Post from 'entities/Post';
import { toast } from 'react-toastify';
import { Spin } from 'antd';
import styles from './PostsList.module.scss';
import { FixedSizeList as List } from 'react-window';
import { ListChildComponentProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

function PostsList() {
  const listRef = useRef<List>(null!);
  const { data, isError, isLoading } = useGetPostsQuery();
  const posts = data ?? [];

  useEffect(() => {
    if (isError) {
      toast('Oops, something went wrong!');
    }
  }, [isError]);

  const rowRenderer = ({ index, style }: ListChildComponentProps) => {
    const post = posts[index];
    return (
      <div style={style} key={post.id}>
        <Post post={post} />
      </div>
    );
  };

  return (
    <div style={{ height: '100vh' }}>
      {isLoading && <Spin className={styles.spin} />}
      {posts && (
        <AutoSizer>
          {({ height, width }: { height: number; width: number }) => (
            <List
              ref={listRef}
              itemCount={posts.length}
              itemSize={87}
              height={height}
              width={width}
            >
              {rowRenderer}
            </List>
          )}
        </AutoSizer>
      )}
    </div>
  );
}

export default PostsList;
