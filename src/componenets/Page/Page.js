import "./Page.scss"
import {Charts, Copy, Home, Users} from "../../Icons/Icons";
import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {loggedInUserState} from "../../state/authState";
export default ({title, children, topContent, activePage = "home"}) => {

  const {name} = useRecoilValue(loggedInUserState);

  const menuItems = {
    home: {title: 'Home',  icon: <Home />, path: "/home"},
    users: {title: 'Users', icon: <Users />, path: "/users"},
    files: {title: 'Files', icon: <Copy />, path: "/files"},
    analytics: {title: 'Analytics', icon: <Charts />, path: "/analytics"}
  };

  return <main>

    <aside>
      <section className="title">
        <h2>Open Pension</h2>
      </section>

      <nav>
        <ul className="side-menu">
          {Object.entries(menuItems).map(([id, menuItem], key) => {
            const {title, icon, path} = menuItem;
            return <li className={`${id === activePage ? 'active' : ''} link-wrapper`}>
              <Link to={path}>
                <span className={`icon icon-${id}`}>{icon}</span>
                <div >{title}</div>
              </Link>
            </li>
          })}
        </ul>
      </nav>

    </aside>

    <section className="main-content">
      <header className="umbre-background">

        <div className="header">
          <h1>{title}</h1>

          <div className="header-menu">
            Welcome <b>{name}</b>. <a href={"#"}>Logout</a>
          </div>

        </div>

        <div className="top-content">
          {topContent}
        </div>
      </header>

      <section className="content">
        {children}
      </section>

    </section>
  </main>
}
