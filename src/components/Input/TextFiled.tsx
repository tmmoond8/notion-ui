/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  ChangeEvent, useState, useMemo, useRef, useEffect,
} from 'react';
import * as styles from './style';

enum Variant {
  Default = 'Default',
  Filled = 'Filled',
  Outlined = 'Outlined',
}

interface TextFieldProps {
  id: string;
  label?: string;
  variant?: Variant;
  placeholder?: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

export default function TextFiled(props: TextFieldProps): JSX.Element {
  const {
    label, id, variant = Variant.Default, placeholder = '', value = '', onChange, errorMessage,
  } = props;
  const [isFocus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>({});
  const stateStyle = useMemo(() => {
    const style = [];
    isFocus && style.push(styles.textFiled.state.focus);
    errorMessage && style.push(styles.textFiled.state.error);
    return style;
  }, [isFocus, errorMessage]);

  const variantStyle = styles.textFiled.variant[variant];
  useEffect(() => {
    if (inputRef?.current) {
      const focusEvent = (): void => setFocus(true);
      const blurEvent = (): void => setFocus(false);
      inputRef?.current.addEventListener('focus', focusEvent);
      inputRef?.current.addEventListener('blur', blurEvent);
      return (): void => {
        inputRef?.current.removeEventListener('focus', focusEvent);
        inputRef?.current.removeEventListener('blur', blurEvent);
      };
    }
  }, [inputRef]);

  return (
    <div css={styles.textFiled.wrapper}>
      {label && <label htmlFor={id}>{label}</label>}
      <div css={[styles.textFiled.default, ...stateStyle, variantStyle]}>
        <input ref={inputRef} type="text" id={id} value={value} placeholder={placeholder} onChange={onChange} />
      </div>
    </div>
  );
}
