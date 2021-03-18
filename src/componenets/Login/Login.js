import {useState} from 'react';
import './Login.scss';
import {Redirect} from "react-router-dom";

export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [redirectToHome, setRedirectToHome] = useState(false);

  if (redirectToHome) {
    return <Redirect to={"/home"} />
  }

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setRedirectToHome(true);
    }, 3000);
  }

  return <div className="login-wrapper">
    <section className="umbre-background">
      <h1 className="h1">Welcome to Open Pension Dashboard</h1>
      <p className="p">
        This is the dashboard for managing Open Pension - If you don't have an account then get out!
      </p>
    </section>

    <section className="login">
      <small className="title">Login</small>

      <div className="inputs">
        <input type="text" id="username" className="email" placeholder="Enter email" onChange={(e) => {setUsername(e.target.value)}} />
        <input type="password" id="username" className="password"  placeholder="Enter password" onChange={(e) => {setPassword(e.target.value)}} />
      </div>

      <button className={`button button-ok ${isLoading ? 'on-click':''}`} onClick={() => handleClick()}>Login</button>
    </section>
  </div>
};
