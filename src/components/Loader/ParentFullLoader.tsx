/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useRef, useLayoutEffect, useEffect, useState, RefObject } from 'react';
import cx from 'classnames';
import debounce from 'lodash.debounce';
import { LoaderProps } from './Loader';
import { colors } from '../../styles';
import Enum from '../../types/enum';
import Icon from '../Icon';

interface WrapperSize {
  left: number;
  top: number;
  height: number;
  width: number;
}

const useParentSize = (ref: RefObject<HTMLDivElement>): WrapperSize => {
  const [wrapperSize, setWrapperSize] = useState({
    top: 0,
    left: -9999,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const { width = 0, height = 0, left = -9999, top = 0 } =
      ref.current?.parentElement?.getBoundingClientRect() ?? {};
    setWrapperSize({
      top,
      left,
      width,
      height,
    });
  }, [ref]);

  useLayoutEffect(() => {
    const resizeEvent = debounce(() => {
      console.log('useLayoutEffect');
      if (ref.current) {
        const { width = 0, height = 0, left = -9999, top = 0 } =
          ref.current?.parentElement?.getBoundingClientRect() ?? {};
        setWrapperSize({
          top,
          left,
          width,
          height,
        });
      }
    }, 300);

    window.addEventListener('resize', resizeEvent);
    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
  }, [ref]);

  return {
    top: wrapperSize.top,
    left: wrapperSize.left,
    width: wrapperSize.width,
    height: wrapperSize.height,
  };
};

export default function ParentFullLoader(props: LoaderProps): JSX.Element {
  const { backgroundColor = colors.background, className } = props;
  const ref = useRef<HTMLDivElement>(null);

  const { top, left, width, height } = useParentSize(ref);

  return (
    <ParentFullWrapper
      backgroundColor={backgroundColor}
      className={cx('ParentFullLoader', className)}
      ref={ref}
      top={top}
      left={left}
      height={height}
      width={width}
    >
      <Icon icon="loading" size={Enum.IconSize.Huge} />
    </ParentFullWrapper>
  );
}
const ParentFullWrapper = styled.div<WrapperSize & LoaderProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: ${p => p.top}px;
  left: ${p => p.left}px;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
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
