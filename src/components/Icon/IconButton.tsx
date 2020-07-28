/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core';
import { MouseEventHandler, useMemo, useCallback, MouseEvent } from 'react';
import classnames from 'classnames';
import Button from 'src/components/Button';
import Icon, { IconProps } from '.';
import * as styles from './styles';

export type IconButtonSize =
  | 'Tiny'
  | 'Small'
  | 'Normal'
  | 'Big'
  | 'Huge'
  | 'Default';

interface IconButtonProps extends IconProps {
  className?: string;
  onClick?: MouseEventHandler;
  buttonSize?: IconButtonSize;
  disabled?: boolean;
}

const useSizeStyle = (buttonSize: IconButtonSize): SerializedStyles => {
  const sizeStyle = useMemo(() => styles.size[buttonSize], [buttonSize]);
  return sizeStyle;
};
const useDiabledStyle = (isDisabled: boolean): SerializedStyles => {
  const disabledStyle = useMemo(() => (isDisabled ? styles.disabled : css``), [
    isDisabled,
  ]);
  return disabledStyle;
};

export default function IconButton(props: IconButtonProps): JSX.Element {
  const {
    className = '',
    onClick,
    disabled = false,
    buttonSize = 'Normal',
    icon,
    size,
  } = props;
  const sizeStyle = useSizeStyle(buttonSize);
  const disabledStyle = useDiabledStyle(disabled);
  const handleClick = useCallback(
    (event: MouseEvent<Element>): void => {
      if (!disabled && typeof onClick === 'function') {
        onClick(event);
      }
    },
    [onClick, disabled],
  );

  return (
    <Button
      onClick={handleClick}
      className={classnames('IconButton', className)}
      style={[styles.iconButton, sizeStyle, disabledStyle]}
    >
      <Icon icon={icon} size={size} />
    </Button>
  );
}
