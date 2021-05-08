import React, { ChangeEvent, useState, useCallback } from 'react';
import { TextField, TextFieldProps, useInput } from 'notion-ui';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'TextField',
  component: TextField,
};


export const TextFieldBase: React.FC<TextFieldProps> = () => {
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
        onSubmit={action('submit: ' + values.textFiled1)}
      />
      <TextField
        id="textFiled2"
        label="name"
        value={values.textFiled2}
        onChange={handleChange}
        onSubmit={action('submit: ' + values.textFiled2)}
      />
    </div>
  );
};

export const NumberTextField = () => {
  const { value, onChange } = useInput('number');
  return (
    <>
      <h2>NumberTextField</h2>
      <TextField
        id="numberTextField"
        label="number"
        type="number"
        value={value}
        onChange={onChange}
      />
    </>
  )
}

NumberTextField.story = {
  decorators: [withKnobs],
};
