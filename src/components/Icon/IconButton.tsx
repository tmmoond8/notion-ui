/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core';
import { MouseEventHandler, useMemo, useCallback, MouseEvent } from 'react';
import classnames from 'classnames';
import Button from '../Button';
import Icon, { IconProps, IconSize } from '.';
import * as styles from './styles';

interface IconButtonProps extends IconProps {
  className?: string;
  onClick?: MouseEventHandler;
  disabled?: boolean;
}

const useSizeStyle = (iconSize: IconSize): SerializedStyles => {
  const sizeStyle = useMemo(() => styles.size[iconSize], [iconSize]);
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
    icon,
    size = 'Default',
  } = props;
  const sizeStyle = useSizeStyle(size);
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
