import {useRecoilValue} from "recoil";
import {authState} from "../state/authState.js"
import Login from "./Login";
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import Home from "./Home/Home";
import Users from "./Users/Users";

export default () => {
  const {token, user} = useRecoilValue(authState);

  return <Router>
    <Switch>
      {token ? <>
        <Route path="/home"><Home /></Route>
        <Route path="/users"><Users /></Route></> : <Route path="/"><Login /></Route>}
    </Switch>
  </Router>
};
