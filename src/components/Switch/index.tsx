/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useState, useCallback } from 'react';
import { colors } from '../../styles';

interface SwitchProps {
  switchOn?: boolean;
  onEvent?: () => void;
  offEvent?: () => void;
}

export default function Switch(props: SwitchProps): JSX.Element {
  const { switchOn = false, onEvent, offEvent } = props;
  const [isOn, setIsOn] = useState(switchOn);
  const handleToggle = useCallback(() => {
    setIsOn(!isOn);
    if (isOn && typeof offEvent === 'function') {
      offEvent();
    }
    if (!isOn && typeof onEvent === 'function') {
      onEvent();
    }
  }, [isOn, offEvent, onEvent]);
  return (
    <Wrapper onClick={handleToggle} isOn={isOn}>
      <Ball isOn={isOn} />
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isOn: boolean }>`
  width: 30px;
  height: 18px;
  border-radius: 44px;
  background-color: ${p => (p.isOn ? colors.primary100 : colors.grey32)};
  cursor: pointer;
`;

const Ball = styled.div<{ isOn: boolean }>`
  position: relative;
  top: 2px;
  left: 2px;
  width: 14px;
  height: 14px;
  border-radius: 14px;
  background-color: white;
  transition: transform 0.2s ease-out 0s, background-color 0.2s ease-out 0s;
  transform: translateX(${p => (p.isOn ? '12px' : '0')});
`;
