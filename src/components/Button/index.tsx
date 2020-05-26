/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactNode, MouseEventHandler } from 'react';
import classnames from 'classnames';
import ButtonBase from './ButtonBase'

export enum ButtonType {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Tertiary = 'Tertiary',
}

export enum ButtonSize {
  Small = 'Small',
  Medium = 'Medium',
  Big = 'Big',
}

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick: MouseEventHandler;
  buttonType?: ButtonType;
  buttonSize?: ButtonSize;
}

export default function(props: ButtonProps) {
  const { children, className='', onClick, buttonType = ButtonType.Primary, buttonSize= ButtonSize.Small } = props;
  return (
    <ButtonBase onClick={onClick} className={classnames('Button', className)} type="button" buttonType={buttonType} buttonSize={buttonSize}>{children}</ButtonBase>
  )
}