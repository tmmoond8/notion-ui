/** @jsx jsx */
import { jsx } from '@emotion/core';
import { MouseEventHandler, useCallback, MouseEvent } from 'react';
import classnames from 'classnames';
import Button, { ButtonSize } from '../Button';
import Icon, { IconProps } from '.';

interface IconButtonProps extends IconProps {
  className?: string;
  onClick?: MouseEventHandler;
  disabled?: boolean;
}

const SIZE_MAP = {
  Tiny: 'Tiny' as ButtonSize,
  Small: 'Small' as ButtonSize,
  Normal: 'Medium' as ButtonSize,
  Big: 'Big' as ButtonSize,
  Huge: 'Big' as ButtonSize,
  Default: 'Medium' as ButtonSize,
};

export default function IconButton(props: IconButtonProps): JSX.Element {
  const {
    className,
    onClick,
    disabled = false,
    icon,
    size = 'Default',
  } = props;
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
      buttonSize={SIZE_MAP[size]}
      disabled={disabled}
    >
      <Icon icon={icon} size={size} />
    </Button>
  );
}
