import React, { ChangeEvent, useState, useCallback } from 'react';
import TextFiled from './TextFiled';

export default {
  title: 'Input',
  component: TextFiled,
};

export const TextFiledBase = (): JSX.Element => {
  const [values, setValues] = useState({
    textFiled1: '',
    textFiled2: '',
  });
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  }, []);

  return (
    <div>
      <h2>TextFiled</h2>
      <h4>placeholder</h4>
      <TextFiled
        id="textFiled1"
        placeholder="placeholder"
        value={values.textFiled1}
        onChange={handleChange}
      />
      <TextFiled
        id="textFiled2"
        label="name"
        value={values.textFiled2}
        onChange={handleChange}
      />
    </div>
  );
};
