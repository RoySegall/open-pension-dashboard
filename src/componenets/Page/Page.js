import "./Page.scss"
import {Charts, Copy, Home, Users} from "../../Icons/Icons";
export default ({title, children, topContent, activePage = "home"}) => {

  const menuItems = {
    home: {title: 'Home',  icon: <Home />},
    users: {title: 'Users', icon: <Users />},
    files: {title: 'Files', icon: <Copy />},
    analytics: {title: 'Analytics', icon: <Charts />}
  };

  return <main>

    <aside>
      <section className="title">
        <h2>Open Pension</h2>
      </section>

      <nav>
        <ul className="side-menu">
          {Object.entries(menuItems).map(([id, menuItem], key) => {
            const {title, icon} = menuItem;
            return <li className={`${id === activePage ? 'active' : ''}`}>
              <span className={`icon-${id}`}>{icon}</span> {title}
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
            Welcome <b>user</b>
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
