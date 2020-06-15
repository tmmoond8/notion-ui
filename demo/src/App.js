import React, { useEffect } from 'react';
import { useTheme } from 'notion-ui';

function App() {
  useTheme();
  useEffect(() => {
    console.log(window.parent.postMessage('abc'));
  }, [])
  return (
    <div className="App">
      <h1>a ddd</h1>
    </div>
  );
}

export default App;
