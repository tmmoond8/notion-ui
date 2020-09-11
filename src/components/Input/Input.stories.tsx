import React, { ChangeEvent, useState, useCallback } from 'react';
import { TextField } from 'notion-ui';

export default {
  title: 'Input',
  component: TextField,
};

export const TextFieldBase = (): JSX.Element => {
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
      <h2>TextField</h2>
      <h4>placeholder</h4>
      <TextField
        id="textFiled1"
        placeholder="placeholder"
        value={values.textFiled1}
        onChange={handleChange}
      />
      <TextField
        id="textFiled2"
        label="name"
        value={values.textFiled2}
        onChange={handleChange}
      />
    </div>
  );
};
