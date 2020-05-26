/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { useState, useEffect, ReactNode, MouseEventHandler } from 'react';
import classnames from 'classnames';
import { colors } from 'src/styles/themes';

export enum ButtonType {
  Default = 'Default',
  Primary = 'Primary',
}

export enum ButtonSize {
  Tiny = 'Tiny',
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
  disabled?: boolean;
}

const useStyle = (buttonType: ButtonType, buttonSize: ButtonSize) => {
  const [buttonTypeStyle, setButtonTypeStyle] = useState({
    backgroundColor: colors.transparent,
    backgroundColorHover: colors.greyR50,
    backgroundColorActive: colors.greyR100,
    boxShadow: 'none',
    color: colors.grey800,
  });

  const [buttonSizeStyle, setButtonSizeStyle] = useState({
    height: '28px',
    fontSize: '14px',
    padding: '0 8px',
  });

  useEffect(() => {
    if (buttonType === ButtonType.Primary) {
      setButtonTypeStyle({
        ...buttonTypeStyle,
        backgroundColor: colors.primaryLight,
        backgroundColorHover: colors.primary,
        backgroundColorActive: colors.primaryDeep,
        boxShadow: 'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 2px;',
        color: colors.white,
      });
    }
    if (buttonSize === ButtonSize.Small) {
      setButtonSizeStyle({
        ...buttonSizeStyle,
        height: '24px',
      });
    } else if (buttonSize === ButtonSize.Big) {
      setButtonSizeStyle({
        ...buttonSizeStyle,
        height: '32px',
      });
    } else if (buttonSize === ButtonSize.Tiny) {
      setButtonSizeStyle({
        ...buttonSizeStyle,
        height: '20px',
        fontSize: '12px',
        padding: '0 4px',
      });
    }
  }, [buttonType, buttonSize])

  return {
    ...buttonTypeStyle,
    ...buttonSizeStyle,
  };
}

export default function(props: ButtonProps) {
  const { children, className = '', onClick, disabled=false, buttonType=ButtonType.Default, buttonSize=ButtonSize.Medium } = props;
  let buttonStyle = useStyle(buttonType, buttonSize);

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
  backgroundColorHover: string;
  backgroundColorActive: string;
  boxShadow: string;
  color: string;
  height: string;
  fontSize: string;
  padding: string;
}

const Button = styled.button<ButtonStyles, HTMLButtonElement>`
  display: inline-block;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
  position: relative;
  background-color: ${p => p.backgroundColor};
  border: 0;
  margin: 0;
  height: ${p => p.height};
  line-height: ${p => p.height};
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  transition: background 120ms ease-in 0s;

  white-space: nowrap;
  border-width: 0;
  border-radius: 3px;
  box-shadow: ${p => p.boxShadow};
  color: ${p => p.color};
  fill: ${p => p.color};
  padding: ${p =>  p.padding};
  font-size: ${p => p.fontSize};
  font-weight: 500;
  outline: none;

  &:hover {
    background-color: ${p => p.backgroundColorHover};
  }
  &:active {
    background-color: ${p => p.backgroundColorActive};
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
