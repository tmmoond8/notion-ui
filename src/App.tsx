import React from 'react';
import Button from 'src/components/Button';

function App() {
  return (
    <div className="App">
      create react app
      <Button onClick={() => console.log('abc')}>메렁</Button>
    </div>
  );
}

export default App;
