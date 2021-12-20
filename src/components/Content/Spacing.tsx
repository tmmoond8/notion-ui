/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

interface SpacingProps {
  size: number;
}

export default function Spacing(props: SpacingProps): JSX.Element {
  const { size } = props;
  return <Block className="Spacing" size={size} />;
}

const Block = styled.div<{ size: number }>`
  display: inline-block;
  width: 100%;
  height: 0;
  padding: 0;
  margin: ${p => p.size}px 0 0 0;
`;
