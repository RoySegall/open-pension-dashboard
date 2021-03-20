import "./Table.scss"
export default ({title, headers, rows, navigationButton}) => {

  return <section className="table">

    <section className="top">
      <span className="title">
        {title}
      </span>

      {navigationButton && <div className="navigation-button-wrapper">
        <button className="navigation-button">View all</button>
      </div> }
    </section>

    <table>
      <thead>
        <tr>
          {headers.map((header, key) => <td key={key}>{header}</td>)}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, key) => <tr key={key}>
          {row.map((cell, key) => <td key={key}>{cell}</td>)}
        </tr>)}
      </tbody>
    </table>
  </section>
};
