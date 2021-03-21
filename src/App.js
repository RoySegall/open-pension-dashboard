import {RecoilRoot,} from 'recoil';
import React from 'react';
import HOC from "./Pages/HOC";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <React.Suspense fallback={<div>Loading...</div>}>
          <HOC />
        </React.Suspense>
      </RecoilRoot>
    </div>
  );
}

export default App;
