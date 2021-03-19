import "./Page.scss"
export default ({title, children, topContent}) => {

  return <main>

    <aside>

      <section className="title">
        <h2>
          Open Pension
        </h2>
      </section>

      <nav>
        <ul>
          <li>Home</li>
          <li>Users</li>
          <li>Files</li>
          <li>Analytics</li>
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
