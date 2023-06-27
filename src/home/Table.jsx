import React from "react";

const Table = (props) => {
  return (
    <table>
      <tbody>
        {props.data.map((vl, ky) => (
          <tr key={ky}>
            <td>{vl.API}</td>
            <td>{vl.Category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
