/* eslint-disable prefer-destructuring */
import _Input from './components/Input';
import _Button from './components/Button';
import _Content from './components/Content';
import { themes } from './styles';

export const { TextFiled } = _Input;
export const Button = _Button.Base;
export const Content = _Content;
export const colors = themes.colors;
