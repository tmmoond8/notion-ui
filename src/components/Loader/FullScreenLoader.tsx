/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import cx from 'classnames';
import { colors } from '../../styles';
import { LoaderProps } from './Loader';
import Enum from '../../types/enum';
import Icon from '../Icon';

export default function FullScreenLoader(props: LoaderProps): JSX.Element {
  const { backgroundColor = colors.background, className } = props;
  return (
    <FullScreenLoaderWrapper
      backgroundColor={backgroundColor}
      className={cx('FullScreenLoader', className)}
    >
      <Icon icon="loading" size={Enum.IconSize.Huge} />
    </FullScreenLoaderWrapper>
  );
}

const FullScreenLoaderWrapper = styled.div<LoaderProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  background-color: ${p => p.backgroundColor};
  & > svg {
    @keyframes rotate {
      100% {
        transform: rotate(1turn);
      }
    }
    animation: rotate 1s linear infinite;
  }
  z-index: 1000;
`;
