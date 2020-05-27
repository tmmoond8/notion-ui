/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactNode, MouseEventHandler } from 'react';
import classnames from 'classnames';
import ButtonBase, { ButtonSize, ButtonType } from './ButtonBase'

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick: MouseEventHandler;
  buttonType?: ButtonType;
  buttonSize?: ButtonSize;
}

export default function(props: ButtonProps) {
  const { children, className='', onClick, buttonType, buttonSize } = props;
  return (
    <ButtonBase onClick={onClick} className={classnames('Button', className)} buttonType={buttonType}>{children}</ButtonBase>
  )
}