const Table = ({ arr }) => {
  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Car</th>
            <th>Income</th>
            <th>Quote</th>
          </tr>
        </thead>

        <tbody>
          {arr.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.gender}</td>
              <td>{item.car}</td>
              <td>{item.income}</td>
              <td>{item.quote}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
