import './Login.scss';

export default () => {

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
        <input type="text" id="username" className="email" placeholder="Enter email" />
        <input type="password" id="username" className="password"  placeholder="Enter password" />
      </div>

      <button className="button button-ok">Login</button>
    </section>
  </div>
};
