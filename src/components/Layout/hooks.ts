import { useState, useEffect } from 'react';
import { addCssRule } from '../../libs/utils';

export const useNoScrollOutside = () => {
  const [notInit, setInit] = useState(true);
  const styleEl = document.querySelector('style');

  useEffect(() => {
    if (notInit && styleEl) {
      setInit(false);
      addCssRule(
        styleEl,
        `
      body, body > div {
        overflow: hidden;
      }
    `,
      );
    }
  }, [notInit, setInit, styleEl]);
};
