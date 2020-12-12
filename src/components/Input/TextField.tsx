/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ChangeEvent, useState, useMemo, useRef, useEffect } from 'react';
import cx from 'classnames';
import * as styles from './styles';

export type Variant = 'Default' | 'Filled' | 'Outlined';

interface TextFieldProps {
  className?: string;
  id: string;
  label?: string;
  variant?: Variant;
  placeholder?: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  onBlur?: () => void;
}

export default function TextField(props: TextFieldProps): JSX.Element {
  const {
    label,
    id,
    variant = 'Default',
    placeholder = '',
    value = '',
    onChange,
    errorMessage,
    className,
    onBlur = () => {},
  } = props;
  const [isFocus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const stateStyle = useMemo(() => {
    const style = [];
    if (isFocus) {
      style.push(styles.textFiled.state.focus);
    }
    if (errorMessage) {
      style.push(styles.textFiled.state.error);
    }
    return style;
  }, [isFocus, errorMessage]);

  const variantStyle = styles.textFiled.variant[variant];
  useEffect((): VoidFunc => {
    if (inputRef?.current) {
      const focusEvent = (): void => setFocus(true);
      const blurEvent = (): void => setFocus(false);

      const inputElement = inputRef.current;
      inputElement.addEventListener('focus', focusEvent);
      inputElement.addEventListener('blur', blurEvent);
      return (): void => {
        inputElement.removeEventListener('focus', focusEvent);
        inputElement.removeEventListener('blur', blurEvent);
      };
    }
    return (): void => {};
  }, [inputRef]);

  return (
    <div css={styles.textFiled.wrapper} className={cx('TextField', className)}>
      {label && <label htmlFor={id}>{label}</label>}
      <div css={[styles.textFiled.default, ...stateStyle, variantStyle]}>
        <input
          ref={inputRef}
          type="text"
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
}