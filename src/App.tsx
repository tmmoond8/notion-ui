/** @jsxFrag Preact.Fragment */
import React from 'react';
import Button from 'src/components/Button';
import { Global, css } from '@emotion/core';
import globalCSS from 'src/styles/global';

function App() {
  return (
    <>
      <Global styles={css`
        ${globalCSS}
      `}/>
        <div className="App">
        create react app
        <Button onClick={() => console.log('abc')}>메렁</Button>
      </div>
    </>
    
  );
}

export default App;
