import React from 'react';

import styles from './Loading.module.scss';

import { Spin } from 'antd';

function Loading(): JSX.Element {
  return (
    <div className={styles.spinWrapper}>
      <Spin size="large" />
    </div>
  );
}

export default Loading;
