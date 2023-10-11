import React, { useEffect, useRef, useState } from 'react';
import { useGetPostsQuery } from '../../shared/api';
import Post from 'entities/Post';
import { toast } from 'react-toastify';
import { Spin } from 'antd';
import styles from './PostsList.module.scss';
import { FixedSizeList as List } from 'react-window';
import { ListChildComponentProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

//FIRST EXAMPLE of virtual scroll with react-window lib
//Second one is below
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
    <div className={styles.wrapper}>
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

//SECOND EXAMPLE of virtual scroll

// function PostsList() {
//   const { data, isError, isLoading } = useGetPostsQuery();
//   const posts = data ?? [];
//   const limit = 10;
//   const rowHeight = 76;
//   const totalCount = posts.length;
//   const maxScroll = posts.length * rowHeight - limit * rowHeight;
//   const [scrollTop, setScrollTop] = useState(0);
//   const startNode = Math.ceil(scrollTop / rowHeight);
//   const visibleData = posts.slice(startNode, startNode + limit);
//   const startRowHeight = scrollTop;
//   const endRowHeight = posts.length * rowHeight - startRowHeight - limit * rowHeight;

//   const lastRowRef = useRef<HTMLDivElement>(null);
//   const scrollerRef = useRef<HTMLDivElement>(null);
//   const firstRowRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (isError) {
//       toast('Oops, something went wrong!');
//     }
//   }, [isError]);

//   const scrollHandler = (): void => {
//     if (lastRowRef.current !== null && scrollerRef.current !== null) {
//       const lastRowRefRect = lastRowRef.current.getBoundingClientRect();
//       const scrollerRefRect = scrollerRef.current.getBoundingClientRect();
//       const firstRowRefRect = firstRowRef.current?.getBoundingClientRect();

//       if (
//         lastRowRefRect.top < scrollerRefRect.bottom &&
//         visibleData[visibleData.length - 1].id !== totalCount
//       ) {
//         setScrollTop(scrollerRef.current.scrollTop - rowHeight);
//       }

//       if (firstRowRefRect!.top > scrollerRefRect.top && scrollerRef.current.scrollTop !== 0) {
//         setScrollTop(scrollerRef.current.scrollTop - rowHeight);
//       }

//       if (scrollerRef.current.scrollTop === 0) {
//         setScrollTop(0);
//       }

//       if (scrollerRef.current.scrollTop >= maxScroll) {
//         setScrollTop(maxScroll);
//       }
//     }
//   };

//   return (
//     <div
//       style={{ height: `${limit * rowHeight - rowHeight * 2}px`, overflow: 'auto' }}
//       onScroll={scrollHandler}
//       ref={scrollerRef}
//     >
//       <div style={{ height: startRowHeight }}></div>

//       {isLoading && <Spin className={styles.spin} />}
//       {posts &&
//         visibleData.map((post, idx) => (
//           <div
//             ref={idx === visibleData.length - 1 ? lastRowRef : idx === 0 ? firstRowRef : null}
//             key={post.id}
//           >
//             <Post post={post} />
//           </div>
//         ))}

//       <div style={{ height: endRowHeight }}></div>
//     </div>
//   );
// }

// export default PostsList;
