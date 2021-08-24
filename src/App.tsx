import React, { Suspense } from 'react';

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <h1>Hello world</h1>
    </Suspense>
  );
};

export default App;
