const Table2 = ({ arr }) => {
    return (
      <div className="Table">
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Income</th>
              <th>Users</th>
            </tr>
          </thead>
  
          <tbody>
            {arr.map((item) => (
              <tr key={item.id}>
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
  