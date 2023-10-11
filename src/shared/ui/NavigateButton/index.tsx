import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = { text: string; to: string };

function NavigateButton(props: Props) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(props.to);
  };

  return (
    <Button style={{ display: 'inline' }} size="small" onClick={handleNavigate}>
      {props.text}
    </Button>
  );
}

export default NavigateButton;
