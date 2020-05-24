/** @jsxFrag Preact.Fragment */
import React from 'react';
import Button from 'src/components/Button';
import { Global, css } from '@emotion/core';
import resetCSS from 'src/styles/reset';

function App() {
  return (
    <>
      <Global styles={css`
        ${resetCSS}
      `}/>
        <div className="App">
        create react app
        <Button onClick={() => console.log('abc')}>메렁</Button>
      </div>
    </>
    
  );
}

export default App;
