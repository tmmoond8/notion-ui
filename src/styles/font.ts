import WebFont from 'webfontloader';

export const loadWebfonts = () => {
  WebFont.load({
    google: {
      families: ['Inter Web:300,400,700', 'sans-serif'],
    },
  });
};
