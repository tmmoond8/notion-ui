import React, { ReactNode, MouseEventHandler } from 'react';
import classnames from 'classnames';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick: MouseEventHandler;
}

export default function Button (props: ButtonProps) {
  const { children, className='', onClick } = props;
  return (
    <button onClick={onClick} className={classnames('Button', className)} type="button">{children}</button>
  )
}