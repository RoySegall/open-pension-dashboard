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
  const {token: tokenFromState} = useRecoilValue(authState);
  const tokenFromStorage = localStorage.getItem('token');
  const isAuth = tokenFromState || tokenFromStorage;

  return <Router>
    <Switch>
      {isAuth ? <>
        <Route path="/users"><Users /></Route>
        <Route path="/"><Home /></Route>
      </> : <Route path="/"><Login /></Route>}
    </Switch>
  </Router>
};
