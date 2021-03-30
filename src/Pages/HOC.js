import {useRecoilValue} from "recoil";
import {authState} from "../state/authState.js"
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import Home from "./Home/Home";
import Users from "./Users/Users";
import Login from "../componenets/Login/Login";

export default () => {
  const {token: tokenFromState} = useRecoilValue(authState);
  const tokenFromStorage = localStorage.getItem('token');
  const isAuth = tokenFromState || tokenFromStorage;
  // todo: use gurards routes.
  return <Router>
    <Switch>
      {isAuth ? <>
        <Route path="/users"><Users /></Route>
        <Route path="/"><Home /></Route>
      </> : <Route path="/"><Login /></Route>}
    </Switch>
  </Router>
};
