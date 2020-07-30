/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core';
import { ReactNode, MouseEventHandler, useMemo } from 'react';
import classnames from 'classnames';
import * as styles from './styles';

export type ButtonType = 'Default' | 'Primary';

export type ButtonSize = 'Tiny' | 'Small' | 'Medium' | 'Big';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick: MouseEventHandler;
  buttonType?: ButtonType;
  buttonSize?: ButtonSize;
  disabled?: boolean;
  style?: SerializedStyles[];
}

const useSizeStyle = (buttonSize: ButtonSize): SerializedStyles => {
  const sizeStyle = useMemo(() => styles.size[buttonSize], [buttonSize]);
  return sizeStyle;
};

const useTypeStyle = (buttonType: ButtonType): SerializedStyles => {
  const typeStyle = useMemo(() => styles.type[buttonType], [buttonType]);
  return typeStyle;
};

export default function ButtonBase(props: ButtonProps): JSX.Element {
  const {
    children,
    className = '',
    onClick,
    disabled = false,
    buttonType = 'Default',
    buttonSize = 'Medium',
    style = [],
  } = props;
  const sizeStyle = useSizeStyle(buttonSize);
  const typeStyle = useTypeStyle(buttonType);

  return (
    <button
      onClick={onClick}
      className={classnames('Button', className)}
      type="button"
      css={[styles.baseStyle, sizeStyle, typeStyle, ...style]}
    >
      {children}
    </button>
  );
}
