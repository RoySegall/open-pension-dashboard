import {
  RecoilRoot,
} from 'recoil';
import HOC from "./componenets/HOC";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <HOC />
      </RecoilRoot>
    </div>
  );
}

export default App;
