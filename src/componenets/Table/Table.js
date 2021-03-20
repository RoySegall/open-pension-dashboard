import "./Table.scss"
export default ({title, headers, rows}) => {

  return <section className="table">
    <span className="title">
      {title}
    </span>

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
