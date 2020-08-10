import { useState, useEffect } from 'react';

export const useNoScrollOutside = () => {
  const [notInit, setInit] = useState(true);
  const style = document.querySelector('style');

  useEffect(() => {
    if (notInit && style && style.sheet) {
      setInit(false);
      style.sheet.insertRule(
        `
        body, body > div {
          overflow: hidden;
        }
      `,
        style.sheet.cssRules.length,
      );
    }
  }, [notInit, setInit, style]);
};
