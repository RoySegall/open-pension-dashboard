import {useRecoilValue} from "recoil";
import {auth} from "../state/auth.js"
import Login from "./Login";
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import Home from "./Home/Home";

export default () => {
  const {token, user} = useRecoilValue(auth);

  return <Router>
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  </Router>
};
