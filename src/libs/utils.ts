import { detect } from 'detect-browser';

const browser = detect();

export const addCssRule = (style: HTMLStyleElement, cssString: string) => {
  if (!style.sheet) {
    return;
  }
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const seeht = style.sheet as CSSStyleSheet;
  if (browser?.name === 'ie') {
    seeht.addRule(cssString, seeht.cssRules.length.toString());
  } else {
    seeht.insertRule(cssString, seeht.cssRules.length);
  }
};
