/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactNode, MouseEventHandler } from 'react';
import classnames from 'classnames';
import { colors } from 'src/styles/themes';

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Big = 'big',
}

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick: MouseEventHandler;
  buttonType?: ButtonType;
  buttonSize?: ButtonSize;
  disabled?: boolean;
}

export default function(props: ButtonProps) {
  const { children, className = '', onClick, disabled=false, buttonType=ButtonType.Secondary } = props;
  let buttonStyle = {};
  if (buttonType === ButtonType.Primary) {
    buttonStyle = {
      backgroundColor: 'red',
    }
  }

  return (
    <Button 
      onClick={onClick} 
      className={classnames('Button', className)} 
      type="button"
      {...buttonStyle}
      >
        {children}
    </Button>
  );
}

interface ButtonStyles {
  backgroundColor: string;
}

const Button = styled.button<ButtonStyles>`
  display: inline-block;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
  position: relative;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent'};
  border: 0;
  margin: 0;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  transition: background 120ms ease-in 0s;

  white-space: nowrap;
  border-width: 0;
  border-radius: 3px;
  /* background: ${colors.primaryLight}; */
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 2px;
  color: white;
  fill: white;
  padding: 0 12px;
  font-size: 14px;
  font-weight: 500;
  outline: none;

  &:hover {
    background: ${colors.primary};
  }
  &:active {
    background: ${colors.primaryDeep};
  }
  &::-moz-focus-inner {
    border-style: none;
  }
  /* disabled {
      pointerEvents: none;
      cursor: default;
    } */
  @media print {
    color-adjust: exact;
  }
`;
