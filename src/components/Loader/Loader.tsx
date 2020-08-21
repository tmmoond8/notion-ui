/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import cx from 'classnames';
import Icon, { IconSize } from '../Icon';
import Enum from '../../types/enum';
import { colors } from '../../styles';

export interface LoaderProps {
  backgroundColor?: string;
  className?: string;
  size?: IconSize;
}

export default function Loader(props: LoaderProps): JSX.Element {
  const {
    backgroundColor = colors.transparent,
    className,
    size = Enum.IconSize.Default,
  } = props;
  return (
    <LoaderWrapper
      className={cx('Loader', className)}
      backgroundColor={backgroundColor}
    >
      <Icon icon="loading" size={size} />
    </LoaderWrapper>
  );
}

const LoaderWrapper = styled.div<LoaderProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${p => p.backgroundColor};
  & > svg {
    @keyframes rotate {
      100% {
        transform: rotate(1turn);
      }
    }
    animation: rotate 1s linear infinite;
  }
`;
