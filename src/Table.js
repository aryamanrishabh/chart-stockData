const Table = ({
  stock1,
  stock2,
  open1,
  open2,
  low1,
  low2,
  high1,
  high2,
  close1,
  close2,
}) => {

  return (
    <table className="table" id={comp ? "" : "display-none"}>
      <thead className="thead-dark">
        <tr>
          <th scope="col"></th>
          <th scope="col">{stock1}</th>
          <th scope="col">{stock2}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Open</th>
          <td>{open1}</td>
          <td>{open2}</td>
        </tr>
        <tr>
          <th scope="row">High</th>
          <td>{high1}</td>
          <td>{high2}</td>
        </tr>
        <tr>
          <th scope="row">Low</th>
          <td>{low1}</td>
          <td>{low2}</td>
        </tr>
        <tr>
          <th scope="row">Close</th>
          <td>{close1}</td>
          <td>{close2}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
