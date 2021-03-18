import {useRecoilValue} from "recoil";
import {auth} from "../state/auth.js"
import Login from "./Login";

export default () => {
  const {token, user} = useRecoilValue(auth);

  return <Login />
};
