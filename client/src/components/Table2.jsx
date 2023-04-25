const Table2 = ({ arr }) => {
    return (
      <div className="tableContainer">
        <table className="table">
          <thead>
            <tr>
              <th>City</th>
              <th>Income</th>
              <th>Users</th>
            </tr>
          </thead>
  
          <tbody>
            {arr.map((item) => (
              <tr key={item.city}>
                <td>{item.city}</td>
                <td>{item.income}</td>
                <td>{item.user}</td>
               </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table2;
  