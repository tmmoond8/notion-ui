/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ChangeEvent, useState, useMemo, useRef, useEffect, KeyboardEvent, HTMLAttributes } from 'react';
import cx from 'classnames';
import * as styles from './styles';

export type Variant = 'Default' | 'Filled' | 'Outlined';

export interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  variant?: Variant;
  value: string | number;
  errorMessage?: string;
  label?: string;
  onSubmit?: () => void;
}

const TextField: React.FC<TextFieldProps> = ({
  errorMessage,
  variant = 'Default',
  className,
  label = "",
  id,
  value,
  placeholder,
  onChange,
  onBlur,
  onSubmit,
}) => {
  const [isFocus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const stateStyle = useMemo(() => {
    const style = [];
    if (isFocus) {
      style.push(styles.textField.state.focus);
    }
    if (errorMessage) {
      style.push(styles.textField.state.error);
    }
    return style;
  }, [isFocus, errorMessage]);

  const variantStyle = styles.textField.variant[variant];
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
    return (): void => { };
  }, [inputRef]);

  return (
    <div css={styles.textField.wrapper} className={cx('TextField', className)}>
      {label && <label htmlFor={id}>{label}</label>}
      <div css={[styles.textField.default, ...stateStyle, variantStyle]}>
        <input
          ref={inputRef}
          type="text"
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={(e: KeyboardEvent) => {
            if (onSubmit && e.key === 'Enter') {
              onSubmit();
            }
          }}
        />
      </div>
    </div>
  );
}

export default TextField;