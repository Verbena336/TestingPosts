import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Result } from 'antd';

function ErrorPage(): JSX.Element {
  const navigate = useNavigate();

  const handleNavigate = (): void => {
    navigate('/');
  };
  return (
    <Result
      status="404"
      title="Error"
      subTitle={"This page doesn't exist"}
      extra={
        <Button type="primary" onClick={handleNavigate}>
          Back Home
        </Button>
      }
    />
  );
}

export default ErrorPage;
