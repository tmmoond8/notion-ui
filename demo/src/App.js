import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useTheme, Content } from 'notion-ui';

function App() {
  useTheme();
  useEffect(() => {
    console.log(window.parent.postMessage('abc'));
  }, [])
  return (
    <div className="App">
      <h1>a ddd</h1>
      <AB>babbab</AB>
    </div>
  );
}

export default App;

const AB = styled(Content.Text)`
  color: red;
`;

