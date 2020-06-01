/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as styles from './styles';

interface SpacingProps {
  size: number;
}

export default function Spacing(props: SpacingProps): JSX.Element {
  const { size } = props;
  return <div className="Spacing" css={styles.spacing(size)} />;
}
