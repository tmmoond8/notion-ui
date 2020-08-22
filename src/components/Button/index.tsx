/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core';
import { ReactNode, MouseEventHandler, useMemo } from 'react';
import classnames from 'classnames';
import * as styles from './styles';
import Enum from '../../types/enum';

export type ButtonType = keyof typeof Enum.ButtonType;

export type ButtonSize = keyof typeof Enum.ButtonSize;

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick: MouseEventHandler;
  buttonType?: ButtonType;
  buttonSize?: ButtonSize;
  disabled?: boolean;
}

const useSizeStyle = (buttonSize: ButtonSize): SerializedStyles => {
  const sizeStyle = useMemo(() => styles.size[buttonSize], [buttonSize]);
  return sizeStyle;
};

const useTypeStyle = (buttonType: ButtonType): SerializedStyles => {
  const typeStyle = useMemo(() => styles.type[buttonType], [buttonType]);
  return typeStyle;
};

const useDisabledStyle = (disabled: boolean): SerializedStyles | null => {
  return disabled ? styles.disabled : null;
};

export default function Button(props: ButtonProps): JSX.Element {
  const {
    children,
    className,
    onClick,
    disabled = false,
    buttonType = 'Default',
    buttonSize = 'Medium',
  } = props;
  const sizeStyle = useSizeStyle(buttonSize);
  const typeStyle = useTypeStyle(buttonType);
  const disabledStyle = useDisabledStyle(disabled);

  return (
    <button
      onClick={onClick}
      className={classnames('Button', className)}
      type="button"
      css={[styles.baseStyle, sizeStyle, typeStyle, disabledStyle]}
    >
      {children}
    </button>
  );
}
