const primary = {
  primaryLight: '#2eabdc',
  primary: '#069bcd',
  primaryDeep: '#008dbe',
};

const grey = {
  R: 'rgb(55, 53, 47)',
  R08: 'rgba(55, 53, 47, 0.08)',
  R16: 'rgba(55, 53, 47, 0.16)',
  R32: 'rgba(55, 53, 47, 0.32)',
  R60: 'rgba(55, 53, 47, 0.60)',
};

const base = {
  transparent: 'transparent',
  white: '#fff',
  black: '#000',
};

export default {
  ...base,
  ...primary,
  ...grey,
};
